"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import InputField from "@/components/InputField";
import Heading from "@/components/Heading";
import TaskList from "@/components/TaskList";
import { taskType } from "@/types/taskTypes";
import bgImage from "@/assets/images/background.jpg";
import { MainSectionContainer } from "@/components/MainSection/style";
import { useSelector } from "react-redux";
import { themeColor } from "@/redux/tasks/selectors";

type MainSectionProps = {
  tasks: taskType;
  heading: string;
};
const MainSection: React.FC<MainSectionProps> = ({ tasks, heading }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [bgColor, setBgColor] = React.useState({
    color: "",
    img: "",
  });
  const { asPath } = useRouter();
  const route = asPath.split("/")[1];

  const bg = useSelector(themeColor);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
    const body = document.querySelector("body");
    const sidebar = document.querySelector("aside");
    sidebar?.classList.toggle("show-sidebar");
    body?.classList.toggle("show-sidebar");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const themeValue = localStorage.getItem("theme");
      if (themeValue) {
        const theme = JSON.parse(themeValue);
        setBgColor(theme);
      }
    }
  }, [bg.color, bg.img]);

  const selectedBg = bgColor.color
    ? bgColor.color
    : bgColor.img && `url(${bgColor.img})`;

  return (
    <MainSectionContainer
      style={{
        background: selectedBg ?? `url(${bgImage.src})`,
        backgroundSize: "cover",
        transition: "all 0.8s ease-in-out",
      }}
    >
      <span className="hamburger-menu" onClick={handleClick}>
        {!showSidebar ? (
          <RxHamburgerMenu size={30} />
        ) : (
          <RxCross1 size={24} color="#606060" />
        )}
      </span>
      <div className="heading-container">
        <Heading title={heading} />
      </div>
      <div className="task-list-container">
        <TaskList taskList={tasks} heading={heading} />
      </div>
      <div className="input-field-container">
        {route !== "completed" && <InputField />}
      </div>
    </MainSectionContainer>
  );
};

export default MainSection;
