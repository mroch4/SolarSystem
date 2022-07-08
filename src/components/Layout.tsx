import { drawObject, drawOrbit, getCoordinates } from "../common/Helpers";
import { useEffect, useRef, useState } from "react";

import { BASE_MODEL_RADIUS } from "../common/Settings";
import Button from "./Button";
import { COLORS } from "../common/Colors";
import Checkbox from "./Checkbox";
import Counter from "./Counter";
import Dates from "./Dates";
import LABELS from "../common/Labels";
import { RELATIVE_RADIUS } from "../common/Constans";
import moment from "moment";
import { planets } from "../common/Factory";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Canvas = (): JSX.Element => {
  const [currentDate] = useState<moment.Moment>(moment());
  const [modelDate, setModelDate] = useState<moment.Moment>(currentDate);
  const [timeSpan, setTimeSpan] = useState<number>(0);
  const [intervalValue, setIntervalValue] = useState<number>(1000);
  const [showOrbits, toggleShowingOrbits] = useState<boolean>(true);
  const [animationMode, toggleAnimationMode] = useState<boolean>(false);
  const [clearMode, toggleclearMode] = useState<boolean>(true);

  const ref = useRef(null);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setTimeSpan(modelDate.diff(currentDate, "days"));

    const canvas: any = ref.current;
    const context = canvas.getContext("2d");
    if (canvas) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;

      const interval = setInterval(() => {
        setModelDate((date) => moment(date).add(1, "days"));

        if (clearMode) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);
        }

        drawObject(context, centerX, centerY, BASE_MODEL_RADIUS * RELATIVE_RADIUS.Sun, "yellow");

        if (showOrbits) {
          planets.map((planet) => drawOrbit(context, centerX, centerY, planet.modelOrbit));
        }

        planets.map((planet) => {
          const planetCoordinates = getCoordinates(centerX, centerY, planet.modelOrbit, (timeSpan * 360) / planet.siderealPeriod);
          drawObject(context, planetCoordinates.x, planetCoordinates.y, planet.modelRadius, planet.color);

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

  const datesProps = {
    currentDate: currentDate,
    modelDate: modelDate,
    timeSpan: timeSpan,
  };

  const accelerationButtonProps = {
    className: "btn btn-light btn-sm mt-2",
    label: ">> 10x",
    onClick: () => setIntervalValue((intervalValue) => intervalValue / 10),
  };

  const buttonClasses = "btn btn-primary btn-sm mt-2";
  const weekButtonProps = {
    className: buttonClasses,
    onClick: () => setModelDate((prev) => prev.add(1, "w")),
    label: LABELS.ADD_WEEK,
  };

  const monthButtonProps = {
    className: buttonClasses,
    onClick: () => setModelDate((prev) => prev.add(1, "M")),
    label: LABELS.ADD_MONTH,
  };

  const yearButtonProps = {
    className: buttonClasses,
    onClick: () => setModelDate((prev) => prev.add(1, "y")),
    label: LABELS.ADD_YEAR,
  };

  const animationCheckboxProps = {
    checked: animationMode,
    handleOnChange: () => {
      animationMode ? setIntervalValue(1000) : setIntervalValue(25);
      toggleAnimationMode(!animationMode);
    },
    label: LABELS.ANIMATION,
  };

  const orbitsCheckboxProps = {
    checked: showOrbits,
    handleOnChange: () => toggleShowingOrbits(!showOrbits),
    label: LABELS.SHOW_ORBITS,
  };

  const canvasCheckboxProps = {
    checked: clearMode,
    handleOnChange: () => toggleclearMode(!clearMode),
    label: LABELS.CLEAR_CANVAS,
  };

  const canvasProps = {
    ref: ref,
    width: width,
    height: height,
  };

  return (
    <>
      <div className="container">
        <section className="panel left">
          <Dates {...datesProps} />
          <Counter intervalValue={intervalValue} />
          {animationMode ? null : <Button {...accelerationButtonProps} />}
          <Button {...weekButtonProps} />
          <Button {...monthButtonProps} />
          <Button {...yearButtonProps} />
        </section>
        <section className="panel right">
          <Checkbox {...animationCheckboxProps} />
          <Checkbox {...orbitsCheckboxProps} />
          <Checkbox {...canvasCheckboxProps} />
        </section>
      </div>
      <canvas {...canvasProps} />
    </>
  );
};

export default Canvas;
