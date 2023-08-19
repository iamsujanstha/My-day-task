import { CheckboxWrapper } from "@/components/Checkbox/style";
import React from "react";

type CheckboxProps = {
  status: string;
  onHandleChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ status, onHandleChange }) => {
  return (
    <CheckboxWrapper>
      <div className="round">
        <input type="checkbox" id="checkbox" checked={status === "2"} onChange={onHandleChange} />
        <label htmlFor="checkbox"></label>
      </div>
    </CheckboxWrapper>
  );
};

export default Checkbox;
