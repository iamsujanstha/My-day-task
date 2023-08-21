import React from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/Button";
import { deleteTask } from "@/redux/tasks/action";
import { PopupContainer } from "@/components/Modals/Popup/style";

type PopupModalProps = {
  title: string;
  taskName: string;
  setShowModal: (value: boolean) => void;
};

const PopupModal: React.FC<PopupModalProps> = ({ title, taskName, setShowModal }) => {
  const dispatch = useDispatch();
  const taskId = localStorage.getItem("showModal");

  const handleDelete = () => {
    taskId && dispatch(deleteTask({ id: taskId }));
    setShowModal(false);
  };

  return (
    <PopupContainer>
      <div className="popup">
        <h3>{title}</h3>
        <p>{taskName} name will be permanently deleted</p>
        <div className="action-buttons">
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </PopupContainer>
  );
};

export default PopupModal;
