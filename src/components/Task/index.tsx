import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { RxDotsHorizontal } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import moment from "moment";

import { editableId } from "@/redux/tasks/selectors";
import { clx } from "@/utils/clx";
import useSound from "use-sound";
import { taskStatus } from "@/enum";
import { setEditableId, setImportant, setModalOpen, updateTask } from "@/redux/tasks/action";
import Tooltip from "@/components/Tooltip";
import { StyledTask } from "@/components/Task/style";
import ClickOutside from "@/components/ClickOutside";
import { getTime } from "@/utils/getTime";

const ActionModal = dynamic(() => import("@/components/Modals/ActionModal"), {
  ssr: false,
});

type TaskProps = {
  id: string;
  task_name: string;
  status: number;
  is_important: boolean;
  createdAt: string;
};

const Task: React.FC<TaskProps> = ({ id, task_name, status, is_important, createdAt }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [hoveredTaskId, setHoveredTaskId] = useState("");
  const [isImportant, setIsImportant] = useState(is_important);
  const inputRef = useRef<HTMLInputElement>(null);

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
        createdAt: new Date().toISOString(),
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

  const handleClick = (id: string) => {
    setHoveredTaskId(id);
    setIsShowModal(true);
  };

  return (
    <>
      <StyledTask>
        <div className="task-label">
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", flex: "1" }}>
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
                onDoubleClick={() => setModalOpen(true)}
              >
                {task_name}
              </li>
            )}
          </div>
          {/* <div className="task-time">{getTime(createdAt)}</div> */}
        </div>
        <div className="task-action">
          {isImportant ? (
            <Tooltip content="Remove importance">
              <AiFillStar
                size={20}
                fill="gold"
                onClick={() => {
                  handleImportant(id);
                }}
              />
            </Tooltip>
          ) : (
            <Tooltip content="Mark as important">
              <AiOutlineStar size={20} fill="gold" onClick={() => handleImportant(id)} />
            </Tooltip>
          )}
          <RxDotsHorizontal size={20} onClick={() => handleClick(id)} onTouchStart={() => handleClick(id)} />
        </div>
        {isShowModal && (
          <ClickOutside onClose={() => setIsShowModal(false)}>
            <div className="action-modal">
              <ActionModal isOpen={showModal} taskId={id} />
            </div>
          </ClickOutside>
        )}
      </StyledTask>
    </>
  );
};

export default Task;
