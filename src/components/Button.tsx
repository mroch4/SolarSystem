import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  className: string;
  textContent: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, textContent, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Button;
