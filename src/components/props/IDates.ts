import moment from "moment";

export interface IDates {
  currentDate: moment.Moment;
  modelDate: moment.Moment;
  timeSpan: number;
}
