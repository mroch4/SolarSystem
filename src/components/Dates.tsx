import { FC } from "react";
import { IDates } from "./props/IDates";
import { useAppContext } from "../hooks/useAppContext";

const Dates: FC<IDates> = (props): JSX.Element => {
  const { currentDate, modelDate, timeSpan } = props;

  const { labels } = useAppContext();

  const dateFormat = "D/M/YYYY";
  const currentDateFormatted = currentDate.format(dateFormat);
  const modelDateFormatted = modelDate.format(dateFormat);

  return (
    <>
      <div className="d-flex justify-content-between">
        <span className="d-flex">{labels.CURRENT_DATE}</span>
        <span className="d-flex">{currentDateFormatted}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="d-flex">{labels.MODELS_DATE}</span>
        <span className="d-flex">{modelDateFormatted}</span>
      </div>
      <div className="d-flex justify-content-end">
        <span>
          + {timeSpan} {timeSpan === 1 ? labels.DAY : labels.DAYS}
        </span>
      </div>
    </>
  );
};

export default Dates;
