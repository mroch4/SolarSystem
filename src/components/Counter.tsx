import { FC } from "react";
import { ICounterProps } from "../interfaces/props/ICounterProps";
import LABELS from "../common/Labels";

const Counter: FC<ICounterProps> = (props): JSX.Element => {
  const { intervalValue } = props;

  return (
    <div className="d-flex justify-content-center">
      <span>{LABELS.COMPARE}</span>
      <span>&nbsp;{Math.floor(1000 / intervalValue)}&nbsp;</span>
      <span>{intervalValue === 1000 ? LABELS.DAY : LABELS.DAYS}</span>
    </div>
  );
};

export default Counter;
