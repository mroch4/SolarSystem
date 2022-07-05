import { FC, ChangeEventHandler } from "react";

interface CheckBoxProps {
  checked: boolean;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const Checkbox: FC<CheckBoxProps> = (props) => {
  const { checked, handleOnChange, label } = props;

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" checked={checked} onChange={handleOnChange} />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
