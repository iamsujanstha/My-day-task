import React from "react";
import { CheckboxWrapper } from "@/components/Checkbox/style";
import { setCompletedStatus, updateTask } from "@/redux/tasks/action";
import { useDispatch, useSelector } from "react-redux";
import { taskStatus } from "@/enum";
import { taskList } from "@/redux/tasks/selectors";

type CheckboxProps = {
  taskId: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ taskId }) => {
  const dispatch = useDispatch();
  const taskData = useSelector(taskList);

  const { tasks } = taskData;

  const data = tasks.find((task) => taskId === task.id);
  const { id, status, task_name, is_important } = data || {};

  const handleChecked = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newStatus = status === taskStatus.COMPLETED ? taskStatus.ACTIVE : taskStatus.COMPLETED;
    const payload = {
      id,
      status: newStatus,
      task_name,
      is_important,
    };
    dispatch(setCompletedStatus(payload));
    payload;
  };

  return (
    <CheckboxWrapper>
      <div className="round">
        <input
          type="checkbox"
          id="checkbox"
          checked={data?.status === taskStatus.COMPLETED}
          onChange={(e) => handleChecked(e)}
        />
        <label htmlFor="checkbox"></label>
      </div>
    </CheckboxWrapper>
  );
};

export default Checkbox;
