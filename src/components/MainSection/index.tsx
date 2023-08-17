import React from "react";
import { MainSectionContainer } from "@/components/MainSection/style";
import InputField from "@/components/InputField";
import Heading from "@/components/Heading";
import TaskList from "@/components/TaskList";

const MainSection = () => {
  return (
    <MainSectionContainer className="hide">
      <div>
        <Heading />
      </div>
      <div className="list">
        <TaskList />
      </div>
      <div className="add-task">
        <InputField />
      </div>
    </MainSectionContainer>
  );
};

export default MainSection;
