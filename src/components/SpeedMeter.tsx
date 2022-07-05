import { FC } from "react";

import LABELS from "../common/Labels";

interface SpeedMeterProps {
  intervalValue: number;
}

const SpeedMeter: FC<SpeedMeterProps> = (props) => {
  const { intervalValue } = props;

  const timeSpeed = Math.floor(1000 / intervalValue);
  return (
    <div className="d-flex justify-content-center">
      <span>{LABELS.COMPARE}</span>
      <span>&nbsp;{timeSpeed}&nbsp;</span>
      <span>{intervalValue === 1000 ? LABELS.DAY : LABELS.DAYS}</span>
    </div>
  );
};

export default SpeedMeter;
