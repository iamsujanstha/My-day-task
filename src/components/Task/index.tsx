import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Checkbox from "@/components/Checkbox";
import { StyledTask } from "@/components/Task/style";
import { clx } from "@/utils/clx";
import useSound from "use-sound";
import { RxDotsHorizontal } from "react-icons/rx";

const ActionModal = dynamic(() => import("@/components/Modals/ActionModal"), { ssr: false });

const Task = ({ id, task_name, status, handleChange }: any) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleIconMouseEnter = () => {
    setShowModal(true);
  };

  const handleDocumentClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <StyledTask>
        <div className="task-label">
          <Checkbox status={status} onHandleChange={handleChange} />
          <li className={clx(status && "strike")}>{task_name}</li>
        </div>
        <div className="task-action">
          <RxDotsHorizontal size={20} onMouseEnter={handleIconMouseEnter} />
        </div>
        {showModal && (
          <div ref={modalRef}>
            <ActionModal />
          </div>
        )}
      </StyledTask>
    </>
  );
};

export default Task;
