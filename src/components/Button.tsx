import { FC } from "react";
import { IButtonProps } from "../interfaces/props/IButtonProps";

const Button: FC<IButtonProps> = (props): JSX.Element => {
  const { className, onClick, label } = props;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
