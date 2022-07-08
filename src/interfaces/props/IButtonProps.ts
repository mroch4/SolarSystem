import { MouseEventHandler } from "react";

export interface IButtonProps {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
}
