import React from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import InputField from "@/components/InputField";
import Heading from "@/components/Heading";
import TaskList from "@/components/TaskList";
import { taskType } from "@/types/taskTypes";
import bgImage from "@/assets/images/background.jpg";
import { MainSectionContainer } from "@/components/MainSection/style";

type MainSectionProps = {
  tasks: taskType;
  heading: string;
};
const MainSection: React.FC<MainSectionProps> = ({ tasks, heading }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
    const body = document.querySelector("body");
    const sidebar = document.querySelector("aside");
    sidebar?.classList.toggle("show-sidebar");
    body?.classList.toggle("show-sidebar");
  };

  const handleModal = () => {
    localStorage.removeItem("showModal");
  };

  return (
    <MainSectionContainer
      className="main-section"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <span className="hamburger-menu" onClick={handleClick}>
        {!showSidebar ? <RxHamburgerMenu size={30} /> : <RxCross1 size={24} color="#606060" />}
      </span>
      <div className="heading-container">
        <Heading title={heading} />
      </div>
      <div className="task-list-container">
        <TaskList taskList={tasks} heading={heading} />
      </div>
      <div className="input-field-container">
        <InputField />
      </div>
    </MainSectionContainer>
  );
};

export default MainSection;
