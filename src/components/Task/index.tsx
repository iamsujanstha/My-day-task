import React, { use } from "react";
import Checkbox from "@/components/Checkbox";
import { StyledTask } from "@/components/Task/style";
import { clx } from "@/utils/clx";
import useSound from "use-sound";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { taskType } from "@/types/taskTypes";

const Task = ({ id, task_name, status }: taskType) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledTask>
      <div className="task-label">
        <Checkbox isChecked={isChecked} handleChange={() => handleChange()} />
        <li className={clx(isChecked && "strike")}>{task_name}</li>
      </div>
      <div className="task-action">
        <BiEdit color="orange" />
        <MdDelete color="red" />
      </div>
    </StyledTask>
  );
};

export default Task;
