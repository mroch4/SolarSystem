import { useState, useEffect, useRef } from "react";
import moment from "moment";

import Checkbox from "./Checkbox";
import SpeedMeter from "./SpeedMeter";
import Button from "./Button";
import Dates from "./Dates";
import { BASE_MODEL_RADIUS } from "../common/AppSettings";
import { RELATIVE_RADIUS } from "../common/AstroData";
import { COLORS } from "../common/Colors";
import { getCoordinates, drawObject, drawOrbit } from "../common/Helpers";
import LABELS from "../common/Labels";
import { planets } from "../common/Planets";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Canvas = () => {
  const { height, width } = useWindowDimensions();
  const canvasRef = useRef(null);

  const [currentDate] = useState(moment());
  const [modelDate, setModelDate] = useState(currentDate);
  const [timeSpan, setTimeSpan] = useState(0);

  const [intervalValue, setIntervalValue] = useState(1000);

  const [showOrbits, toggleShowingOrbits] = useState(true);
  const [animationMode, toggleAnimationMode] = useState(false);
  const [clearMode, toggleclearMode] = useState(true);

  useEffect(() => {
    setTimeSpan(modelDate.diff(currentDate, "days"));

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (canvas) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;

      const interval = setInterval(() => {
        setModelDate((date) => moment(date).add(1, "days"));

        //Clearing the canvas
        if (clearMode) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);
        }

        //Drawing the Sun
        drawObject(context, centerX, centerY, BASE_MODEL_RADIUS * RELATIVE_RADIUS.Sun, ["yellow"]);

        //Drawing the orbits
        if (showOrbits) {
          planets.map((planet) => drawOrbit(context, centerX, centerY, planet.modelOrbit));
        }

        //Drawing the planets
        planets.map((planet) => {
          const planetCoordinates = getCoordinates(centerX, centerY, planet.modelOrbit, (timeSpan * 360) / planet.siderealPeriod);
          drawObject(context, planetCoordinates.x, planetCoordinates.y, planet.modelRadius, planet.color);

          //Drawing the satellites
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
  }, [currentDate, modelDate, timeSpan, intervalValue, showOrbits, clearMode]);

  if (intervalValue < 10) setIntervalValue(1000);

  const handleAnimationToggler = () => {
    animationMode ? setIntervalValue(1000) : setIntervalValue(25);
    toggleAnimationMode(!animationMode);
  };

  const buttonClasses = "btn btn-primary btn-sm mt-2";

  return (
    <>
      <div className="container">
          <section className="panel left">
            <Dates currentDate={currentDate} modelDate={modelDate} timeSpan={timeSpan} />
            <SpeedMeter intervalValue={intervalValue} />
            {animationMode ? null : (
              <Button
                className="btn btn-light btn-sm mt-2"
                textContent="&gt;&gt; 10x"
                onClick={() => setIntervalValue((intervalValue) => intervalValue / 10)}
              />
            )}
            <Button className={buttonClasses} textContent={LABELS.ADD_WEEK} onClick={() => setModelDate((prev) => prev.add(1, "w"))} />
            <Button className={buttonClasses} textContent={LABELS.ADD_MONTH} onClick={() => setModelDate((prev) => prev.add(1, "M"))} />
            <Button className={buttonClasses} textContent={LABELS.ADD_YEAR} onClick={() => setModelDate((prev) => prev.add(1, "y"))} />
          </section>
          <section className="panel right">
            <Checkbox checked={animationMode} handleOnChange={handleAnimationToggler} label={LABELS.ANIMATION} />
            <Checkbox checked={showOrbits} handleOnChange={() => toggleShowingOrbits(!showOrbits)} label={LABELS.SHOW_ORBITS} />
            <Checkbox checked={clearMode} handleOnChange={() => toggleclearMode(!clearMode)} label={LABELS.CLEAR_CANVAS} />
          </section>
      </div>
      <canvas ref={canvasRef} width={width} height={height} />
    </>
    
  );
};

export default Canvas;
