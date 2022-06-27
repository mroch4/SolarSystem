import { useState, useEffect, useRef } from "react";

import moment from "moment";

import useWindowDimensions from "../Hooks/useWindowDimensions";
import { planets } from "../Common/Planets";
import { BASE_MODEL_RADIUS } from "../Common/AppSettings";
import { RELATIVE_RADIUS } from "../Common/AstroData";
import Labels from "../Common/Labels";

const Canvas = () => {
  const { height, width } = useWindowDimensions();
  const canvasRef = useRef(null);
  const [currentDate] = useState(moment());
  const [modelDate, setModelDate] = useState(currentDate);
  const [timeSpan, setTimeSpan] = useState(0);
  const [intervalValue, setIntervalValue] = useState(1000);

  useEffect(() => {
    setTimeSpan(modelDate.diff(currentDate, "days"));

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (canvas) {
      const interval = setInterval(() => {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        setModelDate((date) => moment(date).add(1, "days"));

        //Draw the Sun
        drawObject(context, centerX, centerY, BASE_MODEL_RADIUS * RELATIVE_RADIUS.Sun, "yellow");

        //Draw the planets
        planets.map((planet) => {
          const planetPosition = (timeSpan * 360) / planet.siderealPeriod;
          const planetX = centerX + planet.modelOrbit * Math.cos(planetPosition * (Math.PI / 180));
          const planetY = centerY + planet.modelOrbit * Math.sin(planetPosition * (Math.PI / 180));
          drawObject(context, planetX, planetY, planet.modelRadius, planet.color);
          //Draw the satellites
          if (planet.satellites) {
            planet.satellites.map((satellite) => {
              const satellitePosition = (timeSpan * 360) / satellite.siderealPeriod;
              const satelliteX = planetX + satellite.modelOrbit * Math.cos(satellitePosition * (Math.PI / 180));
              const satelliteY = planetY + satellite.modelOrbit * Math.sin(satellitePosition * (Math.PI / 180));
              drawObject(context, satelliteX, satelliteY, satellite.modelRadius, "#c6c6c6");
              return null;
            });
          }
          return null;
        });
      }, intervalValue);

      return () => clearInterval(interval);
    }
  }, [currentDate, modelDate, timeSpan, intervalValue]);

  if (intervalValue < 10) setIntervalValue(1000);

  const drawObject = (ctx, positionX, positionY, radius, color) => {
    ctx.beginPath();
    ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };

  return (
    <section>
      <div className="container">
        <div className="console mt-3">
          <div className="d-flex flex-column col-3">
            <div>
              {Labels.CURRENT_DATE} {currentDate.format("LL")}
            </div>
            <div>
              {Labels.MODELS_DATE} {modelDate.format("LL")}
            </div>
            <div>
              {Labels.TIMESPAN}
              {timeSpan}
            </div>
          </div>
          <div>
            <span>
              {Labels.COMPARE} {Math.floor(1000 / intervalValue)}
              {intervalValue === 1000 ? Labels.DAY : Labels.DAYS}
            </span>
            <button className="btn btn-light" onClick={() => setIntervalValue((intervalValue) => intervalValue / 10)}>
              &gt;&gt; 10x
            </button>
          </div>
          <div>
            <button className="btn btn-warning" onClick={() => setIntervalValue(30)}>
              {Labels.ANIMATION}
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => setModelDate((prev) => prev.add(1, "w"))}>
              {Labels.ADD_WEEK}
            </button>
            <button className="btn btn-primary" onClick={() => setModelDate((prev) => prev.add(1, "M"))}>
              {Labels.ADD_MONTH}
            </button>
            <button className="btn btn-primary" onClick={() => setModelDate((prev) => prev.add(1, "y"))}>
              {Labels.ADD_YEAR}
            </button>
          </div>
        </div>
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
    </section>
  );
};

export default Canvas;
