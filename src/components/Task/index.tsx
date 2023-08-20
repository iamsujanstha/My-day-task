import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { StyledTask } from "@/components/Task/style";
import { clx } from "@/utils/clx";
import useSound from "use-sound";
import { RxDotsHorizontal } from "react-icons/rx";
import { taskStatus } from "@/enum";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCompletedStatus, setImportant } from "@/redux/tasks/action";

const ActionModal = dynamic(() => import("@/components/Modals/ActionModal"), { ssr: false });
const Checkbox = dynamic(() => import("@/components/Checkbox"), { ssr: false });

type TaskProps = {
  id: string;
  task_name: string;
  status: number;
  is_important: boolean;
};

const Task: React.FC<TaskProps> = ({ id, task_name, status, is_important }) => {
  const [hoveredTaskId, setHoveredTaskId] = useState("");
  const [isImportant, setIsImportant] = useState(is_important);
  const modalRef = useRef(null);
  const showModal = hoveredTaskId === id;
  const dispatch = useDispatch();

  const handleIconMouseEnter = () => {
    setHoveredTaskId(id);
  };

  const handleIconMouseLeave = () => {
    setHoveredTaskId("");
  };

  /*  Keep the modal open when the cursor is over it */
  const handleModalMouseEnter = () => {
    setHoveredTaskId(id);
  };

  const handleModalMouseLeave = () => {
    setHoveredTaskId("");
  };

  const handleDocumentClick = (event: any) => {
    if (modalRef.current && !modalRef.current?.contains(event.target)) {
      setHoveredTaskId("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleImportant = (taskId: string) => {
    const payload = {
      id: taskId,
      status,
      task_name,
      is_important: !is_important,
    };
    dispatch(setImportant(payload));
    setIsImportant(!isImportant);
  };

  return (
    <>
      <StyledTask>
        <div className="task-label">
          <Checkbox taskId={id} />
          <li className={clx(taskStatus[status] === "COMPLETED" && "strike")}>{task_name}</li>
        </div>
        <div className="task-action">
          {isImportant ? (
            <AiFillStar size={20} fill="gold" onClick={() => handleImportant(id)} />
          ) : (
            <AiOutlineStar size={20} fill="gold" onClick={() => handleImportant(id)} />
          )}
          <RxDotsHorizontal size={20} onMouseEnter={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave} />
        </div>
        {showModal && (
          <div
            ref={modalRef}
            className="action-modal"
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}>
            <ActionModal isOpen={showModal} taskId={id} />
          </div>
        )}
      </StyledTask>
    </>
  );
};

export default Task;
