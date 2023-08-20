import { StyledHeader } from "@/components/Heading/style";
import moment from "moment";
import React from "react";

const Heading = ({ title }: any) => {
  const currentDate = moment().format("dddd, MMMM D");
  return (
    <StyledHeader>
      <div className="container">
        <h2>{title}</h2>
        <p>{currentDate}</p>
      </div>
      <div>Icon pack</div>
    </StyledHeader>
  );
};

export default Heading;
