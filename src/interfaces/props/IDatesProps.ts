import moment from "moment";

export interface IDatesProps {
  currentDate: moment.Moment;
  modelDate: moment.Moment;
  timeSpan: number;
}
