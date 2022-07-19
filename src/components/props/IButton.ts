import { MouseEventHandler } from "react";

export interface IButton {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
}
