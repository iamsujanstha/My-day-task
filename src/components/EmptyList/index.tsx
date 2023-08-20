import { Container } from "@/components/EmptyList/style";
import Image from "next/image";
import React from "react";
import EmptyImage from "@/assets/images/empty_list.png";

const EmptyList = ({ innerText }: any) => {
  console.log(innerText)
  return (
    <Container>
      <div className="empty-section">
        <Image src={EmptyImage} width="250" height="200" alt="empty list" />
        <h3 className="empty-section">{`Wondering where your ${innerText} are?`}</h3>
        <p>List out the all tasks and you can mark as important.</p>
      </div>
    </Container>
  );
};

export default EmptyList;
