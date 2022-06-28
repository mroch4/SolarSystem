import { useState, useEffect, useRef } from "react";

import moment from "moment";

import { BASE_MODEL_RADIUS } from "../Common/AppSettings";
import { RELATIVE_RADIUS } from "../Common/AstroData";
import { drawObject, getCoordinates } from "../Common/Helpers";
import LABELS from "../Common/Labels";
import { planets } from "../Common/Planets";

import useWindowDimensions from "../Hooks/useWindowDimensions";
import { COLORS } from "../Common/Colors";

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
          const planetCoordinates = getCoordinates(centerX, centerY, planet.modelOrbit, (timeSpan * 360) / planet.siderealPeriod);
          drawObject(context, planetCoordinates.x, planetCoordinates.y, planet.modelRadius, planet.color);

          //Draw the satellites
          if (planet.satellites) {
            planet.satellites.map((satellite) => {
              const satelliteCoordinates = getCoordinates(
                planetCoordinates.x,
                planetCoordinates.y,
                satellite.modelOrbit,
                (timeSpan * 360) / satellite.siderealPeriod
              );
              drawObject(context, satelliteCoordinates.x, satelliteCoordinates.y, satellite.modelRadius, COLORS.Satelitte);
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

  return (
    <section>
      <div className="container">
        <div className="d-flex flex-column flex-lg-row console mt-3">
          <div className="d-flex flex-column col-12 col-lg-3">
            <div>
              {LABELS.CURRENT_DATE} {currentDate.format("LL")}
            </div>
            <div>
              {LABELS.MODELS_DATE} {modelDate.format("LL")}
            </div>
            <div>
              {LABELS.TIMESPAN}
              {timeSpan}
            </div>
          </div>
          <div>
            <span>
              {LABELS.COMPARE} {Math.floor(1000 / intervalValue)}
              {intervalValue === 1000 ? LABELS.DAY : LABELS.DAYS}
            </span>
            <button className="btn btn-light" onClick={() => setIntervalValue((intervalValue) => intervalValue / 10)}>
              &gt;&gt; 10x
            </button>
            <button className="btn btn-warning" onClick={() => setIntervalValue(30)}>
              {LABELS.ANIMATION}
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => setModelDate((prev) => prev.add(1, "w"))}>
              {LABELS.ADD_WEEK}
            </button>
            <button className="btn btn-primary" onClick={() => setModelDate((prev) => prev.add(1, "M"))}>
              {LABELS.ADD_MONTH}
            </button>
            <button className="btn btn-primary" onClick={() => setModelDate((prev) => prev.add(1, "y"))}>
              {LABELS.ADD_YEAR}
            </button>
          </div>
        </div>
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
    </section>
  );
};

export default Canvas;
