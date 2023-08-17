import React from "react";
import { MainSectionContainer } from "@/components/MainSection/style";
import InputField from "@/components/InputField";
import Heading from "@/components/Heading";
import TaskList from "@/components/TaskList";

const MainSection = () => {
  return (
    <MainSectionContainer className="main-section">
      <div className="heading-container">
        <Heading />
      </div>
      <div className="task-list-container">
        <TaskList />
      </div>
      <div className="input-field-container">
        <InputField />
      </div>
    </MainSectionContainer>
  );
};

export default MainSection;
