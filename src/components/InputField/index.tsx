import React from "react";
import { useDispatch } from "react-redux";
import { GrAdd } from "react-icons/gr";
import { BiCircle } from "react-icons/bi";

import { createTask } from "@/redux/tasks/action";
import { taskStatus } from "@/enum";
import { StyledContainer } from "@/components/InputField/style";

const InputField = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const payload = {
        task_name: inputValue,
        status: taskStatus.ACTIVE, // default status is ACTIVE
        isImportant: false, // default isImportant is false
      };
      dispatch(createTask(payload));

      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <StyledContainer>
      <form>
        <span>{isFocused || inputValue ? <BiCircle color="#aaa" size={22} /> : <GrAdd color="#aaa" size={20} />}</span>
        <input
          type="text"
          value={inputValue}
          name="createTask"
          onChange={(e) => handleChange(e)}
          placeholder="Add task"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
        />
      </form>
    </StyledContainer>
  );
};

export default InputField;
