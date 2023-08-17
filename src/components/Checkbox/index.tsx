import { CheckboxWrapper } from "@/components/Checkbox/style";
import React from "react";

type CheckboxProps = {
  isChecked: boolean;
  handleChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, handleChange }) => {
  return (
    <CheckboxWrapper>
      <div className="round">
        <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleChange} />
        <label htmlFor="checkbox"></label>
      </div>
    </CheckboxWrapper>
  );
};

export default Checkbox;
