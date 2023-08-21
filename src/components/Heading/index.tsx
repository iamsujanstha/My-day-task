"use client";
import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { StyledHeader } from "@/components/Heading/style";
import { searchedKeyword } from "@/redux/tasks/selectors";
import { RxDotsHorizontal } from "react-icons/rx";
import ThemeModal from "@/components/Modals/ThemeSeclection";
import ClickOutside from "@/components/ClickOutside";
import Tooltip from "@/components/Tooltip";

const Heading = ({ title }: any) => {
  const [showModal, setShowModal] = React.useState(false);

  const currentDate = moment().format("dddd, MMMM D");
  const searchedText = useSelector(searchedKeyword);

  /* const searchedText = typeof window !== "undefined" && window.localStorage.getItem("searchedQuery"); */

  /* Clear localStorage item when unmount */
  React.useEffect(() => {
    return () => {
      localStorage.removeItem("searchedQuery");
    };
  }, []);

  const showTitle = searchedText
    ? `${title} result for "${searchedText}"`
    : title;

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledHeader>
      <div className="container">
        <h2>{showTitle}</h2>
        <p>{currentDate}</p>
      </div>
      <div>
        <Tooltip content="Theme option">
          <span onClick={handleClick}>
            <RxDotsHorizontal size={26} />
          </span>
        </Tooltip>
        <ClickOutside onClose={() => setShowModal(false)}>
          <span className="theme-modal">{showModal && <ThemeModal />}</span>
        </ClickOutside>
      </div>
    </StyledHeader>
  );
};

export default Heading;
