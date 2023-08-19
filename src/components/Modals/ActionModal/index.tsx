import { StyledModal } from "@/components/Modals/ActionModal/style";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const modalItems = [
  {
    id: 1,
    name: "Mark as complete",
    icon: <AiOutlineCheckCircle size={22} />,
    shortcut: "Ctrl + D",
  },
  {
    id: 2,
    name: "Edit task",
    icon: <BiEdit size={22} />,
    shortcut: "Ctrl + E",
  },
  {
    id: 3,
    name: "Delete task",
    icon: <MdDelete color="red" size={22} />,
    shortcut: "Ctrl + D",
  },
];

const ActionModal = () => {
  return (
    <StyledModal>
      <div className="modal-content">
        <ul>
          {modalItems.map((item) => (
            <li key={item.id}>
              <span className={`icon ${item.id}`}>{item.icon}</span>
              <span className={`name ${item.name}`}>{item.name}</span>
              <span className="shortcut">{item.shortcut}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledModal>
  );
};

export default ActionModal;
