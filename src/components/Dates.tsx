import { FC } from "react";
import moment from "moment";

import LABELS from "../common/Labels";

interface DatesProps {
  currentDate: moment.Moment;
  modelDate: moment.Moment;
  timeSpan: number;
}

const Dates: FC<DatesProps> = (props) => {
  const { currentDate, modelDate, timeSpan } = props;

  return (
    <>
      <div className="d-flex justify-content-between">
        <span className="d-flex">{LABELS.CURRENT_DATE}</span>
        <span className="d-flex">{currentDate.format("D/M/YYYY")}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="d-flex">{LABELS.MODELS_DATE}</span>
        <span className="d-flex">{modelDate.format("D/M/YYYY")}</span>
      </div>
      <div className="d-flex justify-content-end">
        <span>
          + {timeSpan} {timeSpan === 1 ? LABELS.DAY : LABELS.DAYS}
        </span>
      </div>
    </>
  );
};

export default Dates;
