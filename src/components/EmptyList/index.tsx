import React from "react";
import Image from "next/image";

import { Container } from "@/components/EmptyList/style";
import EmptyImage from "@/assets/images/empty_list.png";

const EmptyList = ({ innerText }: any) => {
  return (
    <Container>
      <div className="empty-section">
        <Image src={EmptyImage} width="250" height="200" alt="empty list" />
        <h3 className="empty-section">{`Wondering where your ${innerText} tasks are?`}</h3>
        <p>To Do gives you focus, from work to play. Make a list for day to day tasks.Get started.</p>
      </div>
    </Container>
  );
};

export default EmptyList;
