import React from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  deleteTask,
  updateTask,
  setEditableId,
  setCompletedStatus,
} from "@/redux/tasks/action";
import { taskStatus } from "@/enum";
import { taskList } from "@/redux/tasks/selectors";
import { StyledModal } from "@/components/Modals/ActionModal/style";
import Tooltip from "@/components/Tooltip";

const PopupModal = dynamic(() => import("@/components/Modals/Popup"), {
  ssr: false,
});

const modalItems = [
  {
    id: 1,
    name: "Mark as complete",
    icon: <AiOutlineCheckCircle size={22} />,
    action: "complete",
  },
  {
    id: 2,
    name: "Edit task",
    icon: <BiEdit size={22} />,
    action: "edit",
  },
  {
    id: 3,
    name: "Delete task",
    icon: <MdDelete color="red" size={22} />,
    action: "delete",
  },
];

type ActionModalProps = {
  isOpen: boolean;
  taskId: string;
};

const ActionModal = ({ isOpen, taskId }: ActionModalProps) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useDispatch();
  const taskData = useSelector(taskList);

  const { tasks } = taskData;

  const data = tasks.find((task) => taskId === task.id);
  const { id, status, task_name, is_important } = data || {};

  const handleClick = (id: any, item: any) => {
    setIsClicked(true);
    const action =
      item.id === 1 && status === taskStatus.COMPLETED
        ? "uncomplete"
        : item.action;

    switch (action) {
      case "complete":
        const payload = {
          id,
          status: taskStatus.COMPLETED,
          task_name,
          is_important,
        };
        dispatch(setCompletedStatus(payload));
        break;

      case "uncomplete":
        const payload2 = {
          id,
          status: taskStatus.ACTIVE,
          task_name,
          is_important,
        };
        dispatch(setCompletedStatus(payload2));
        break;

      case "edit":
        dispatch(setEditableId(id));
        break;

      case "delete":
        dispatch(deleteTask({ id }));
        break;

      default:
        break;
    }
  };

  return (
    <StyledModal
      style={{ display: isClicked ? "none" : isOpen ? "block" : "" }}
    >
      <div className="modal-content">
        <ul>
          {modalItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(id, item)}
                className={
                  item.id === 2 && status === taskStatus.COMPLETED
                    ? "disabled"
                    : ""
                }
              >
                <span className={`icon ${item.id}`}>{item.icon}</span>
                <span className={`name ${item.name}`}>
                  {item.id === 1 && status === taskStatus.COMPLETED
                    ? "Mark as not completed"
                    : item.name}
                </span>
                {/* <span className="shortcut">{item.shortcut}</span> */}
              </li>
          ))}
        </ul>
      </div>
    </StyledModal>
  );
};

export default ActionModal;
