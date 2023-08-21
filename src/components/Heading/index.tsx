"use client";
import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { StyledHeader } from "@/components/Heading/style";
import { searchedKeyword } from "@/redux/tasks/selectors";

const Heading = ({ title }: any) => {
  const currentDate = moment().format("dddd, MMMM D");
  const searchedText = useSelector(searchedKeyword);

  /* const searchedText = typeof window !== "undefined" && window.localStorage.getItem("searchedQuery"); */

  /* Clear localStorage item when unmount */
  React.useEffect(() => {
    return () => {
      localStorage.removeItem("searchedQuery");
    };
  }, []);

  const showTitle = searchedText ? `${title} result for "${searchedText}"` : title;

  return (
    <StyledHeader>
      <div className="container">
        <h2>{showTitle}</h2>
        <p>{currentDate}</p>
      </div>
    </StyledHeader>
  );
};

export default Heading;
