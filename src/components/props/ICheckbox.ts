import { ChangeEventHandler } from "react";

export interface ICheckbox {
  checked: boolean;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}
