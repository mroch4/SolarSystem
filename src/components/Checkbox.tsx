import { FC } from "react";
import { ICheckbox } from "./props/ICheckbox";

const Checkbox: FC<ICheckbox> = (props): JSX.Element => {
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
