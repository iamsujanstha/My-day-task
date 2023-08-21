import React from "react";
import { useDispatch } from "react-redux";

import { CheckboxWrapper } from "@/components/Checkbox/style";
import { setCompletedStatus } from "@/redux/tasks/action";
import { taskStatus } from "@/enum";

type CheckboxProps = {
  taskId: string;
  taskName: string;
  status: number;
  isImportant: boolean;
  onClick?: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ taskId, taskName, status, isImportant, onClick }) => {
  const dispatch = useDispatch();

  const handleChecked = () => {
    const newStatus = status === taskStatus.COMPLETED ? taskStatus.ACTIVE : taskStatus.COMPLETED;
    const payload = {
      id: taskId,
      status: newStatus,
      task_name: taskName,
      is_important: isImportant,
    };
    console.log(taskId);

    dispatch(setCompletedStatus(payload));
  };

  return (
    <CheckboxWrapper>
      <div className="round">
        <input
          type="checkbox"
          id="checkbox"
          checked={status === taskStatus.COMPLETED}
          onChange={onClick ? onClick : handleChecked}
        />
        <label htmlFor="checkbox" />
      </div>
    </CheckboxWrapper>
  );
};

export default Checkbox;
