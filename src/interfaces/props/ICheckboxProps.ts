import { ChangeEventHandler } from "react";

export interface ICheckboxProps {
  checked: boolean;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}
