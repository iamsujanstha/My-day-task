import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { RxDotsHorizontal } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { editableId } from "@/redux/tasks/selectors";
import { clx } from "@/utils/clx";
import useSound from "use-sound";
import { taskStatus } from "@/enum";
import { setEditableId, setImportant, setModalOpen, updateTask } from "@/redux/tasks/action";
import Tooltip from "@/components/Tooltip";
import { StyledTask } from "@/components/Task/style";

const ActionModal = dynamic(() => import("@/components/Modals/ActionModal"), { ssr: false });

type TaskProps = {
  id: string;
  task_name: string;
  status: number;
  is_important: boolean;
};

const Task: React.FC<TaskProps> = ({ id, task_name, status, is_important }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [hoveredTaskId, setHoveredTaskId] = useState("");
  const [isImportant, setIsImportant] = useState(is_important);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef(null);

  const editId = useSelector(editableId);
  const dispatch = useDispatch();
  const showModal = hoveredTaskId === id;

  useEffect(() => {
    if (isEditable) {
      inputRef.current?.focus();
    }
  }, [isEditable]);

  useEffect(() => {
    if (editId === id) {
      setIsEditable(true);
      setEditValue(task_name);
    }
  }, [editId]);

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

  const handleChange = (e: any) => {
    e.preventDefault();
    setEditValue(e.target.value);
  };

  const handleSubmit = () => {
    if (editValue.trim() !== "") {
      const payload = {
        id: editId,
        task_name: editValue,
        status,
        is_important,
      };
      dispatch(updateTask(payload));
      dispatch(setEditableId(""));
      setEditValue("");
      setIsEditable(false);
    }
  };

  const handleOnKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setIsEditable(false);
      handleSubmit();
    }
  };

  return (
    <>
      <StyledTask>
        <div className="task-label">
          <span>
            {status === taskStatus.COMPLETED ? (
              <BiCheckDouble color="#333" size={24} />
            ) : (
              <BiCheck color="#333" size={24} />
            )}
          </span>
          {isEditable ? (
            <div className="edit-field">
              <input
                ref={inputRef}
                type="text"
                value={editValue}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={() => {
                  setIsEditable(false);
                }}
                onKeyDown={(e) => {
                  handleOnKeyDown(e);
                }}
                className="edit-input"
              />
            </div>
          ) : (
            <li
              className={clx(taskStatus[status] === "COMPLETED" && "strike")}
              onDoubleClick={() => setModalOpen(true)}>
              {task_name}
            </li>
          )}
        </div>
        <div className="task-action">
          {isImportant ? (
            <Tooltip content="Remove importance">
              <AiFillStar
                size={20}
                fill="gold"
                onClick={() => {
                  handleImportant(id);
                  console.log("id2", id);
                }}
              />
            </Tooltip>
          ) : (
            <Tooltip content="Mark as important">
              <AiOutlineStar size={20} fill="gold" onClick={() => handleImportant(id)} />
            </Tooltip>
          )}
          <RxDotsHorizontal
            size={20}
            onMouseEnter={() => setHoveredTaskId(id)}
            onMouseLeave={() => setHoveredTaskId("")}
            onClick={() => setHoveredTaskId(id)}
            onTouchStart={() => setHoveredTaskId(id)} // Handle touch start event
            // onTouchEnd={() => setHoveredTaskId("")} // Handle touch end event
            onTouchCancel={() => setHoveredTaskId("")} // Handle touch cancel event
          />
        </div>
        {showModal && (
          <div
            ref={modalRef}
            className="action-modal"
            onMouseEnter={() => setHoveredTaskId(id)}
            onMouseLeave={() => setHoveredTaskId("")}>
            <ActionModal isOpen={showModal} taskId={id} />
          </div>
        )}
      </StyledTask>
    </>
  );
};

export default Task;
