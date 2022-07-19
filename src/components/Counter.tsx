import { FC } from "react";
import { ICounter } from "./props/ICounter";
import { useAppContext } from "../hooks/useAppContext";

const Counter: FC<ICounter> = (props): JSX.Element => {
  const { intervalValue } = props;

  const { labels } = useAppContext();

  const counter = Math.floor(1000 / props.intervalValue);

  return (
    <div className="d-flex justify-content-center">
      <span>{labels.COMPARE}</span>
      <span>&nbsp;{counter}&nbsp;</span>
      <span>{intervalValue === 1000 ? labels.DAY : labels.DAYS}</span>
    </div>
  );
};

export default Counter;
