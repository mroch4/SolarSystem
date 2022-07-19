import { ILabels } from "../../labels/interfaces/ILabels";

export interface IContext {
  intl: string;
  changeIntl: (countryCode: string) => void;
  labels: ILabels;
}
