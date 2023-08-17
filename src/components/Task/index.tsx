import React from "react";
import Checkbox from "@/components/Checkbox";
import { StyledTask } from "@/components/Task/style";
import { clx } from "@/utils/clx";
import useSound from "use-sound";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Task = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  // const [playSound] = useSound(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    // playSound();
  };

  return (
    <StyledTask>
      <div className="task-label">
        <Checkbox isChecked={isChecked} handleChange={handleChange} />
        <li className={clx(isChecked && "strike")}>This is good morning</li>
      </div>
      <div className="task-action">
        <BiEdit color="orange" />
        <MdDelete color="red" />
      </div>
    </StyledTask>
  );
};

export default Task;
