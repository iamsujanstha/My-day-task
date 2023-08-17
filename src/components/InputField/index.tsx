import { StyledContainer } from "@/components/InputField/style";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { BiCircle } from "react-icons/bi";

const InputField = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledContainer>
      <span>{isFocused || inputValue ? <BiCircle color="#aaa" /> : <GrAdd color="#bbb" />}</span>
      <input
        type="text"
        value={inputValue}
        name="addTask"
        onChange={(e)=> setInputValue(e.target.value)}
        placeholder="Add task"
        onFocus={handleFocused}
        onBlur={handleBlur}
      />
    </StyledContainer>
  );
};

export default InputField;
