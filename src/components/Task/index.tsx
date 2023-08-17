import { StyledTask } from "@/components/Task/style";
import React from "react";
import { BiCircle, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Task = () => {
  return (
    <StyledTask>
      <div className="task-label">
        <span className="circular-checkbox">
          <input type="checkbox" />
        </span>
        <li>This is good morning</li>
      </div>
      <div className="task-action">
        <BiEdit color="orange" />
        <MdDelete color="red" />
      </div>
    </StyledTask>
  );
};

export default Task;
