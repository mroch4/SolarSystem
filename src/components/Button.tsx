import { FC } from "react";
import { IButton } from "./props/IButton";

const Button: FC<IButton> = (props): JSX.Element => {
  const { className, onClick, label } = props;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
