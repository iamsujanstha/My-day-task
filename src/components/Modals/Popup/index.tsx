import React from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/Button";
import { PopupContainer } from "@/components/Modals/Popup/style";
import { deleteTask } from "@/redux/tasks/action";

type PopupModalProps = {
  title: string;
  taskName: string;
  taskId: string;
  setShowModal: (value: boolean) => void;
};

const PopupModal: React.FC<PopupModalProps> = ({
  title,
  taskId,
  taskName,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  // const taskId = localStorage.getItem("showModal");

  const handleDelete = () => {
    taskId && dispatch(deleteTask({ id: taskId }));
    setShowModal(false);
  };
  console.log(taskName, "taskName");

  return (
    <PopupContainer>
      <div className="popup">
        <h3>{title}</h3>
        <p>
          <span style={{color:'black'}}>{`"${taskName}" `}</span>
          <span>name will be permanently deleted</span>
        </p>
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
