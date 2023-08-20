import Task from "@/components/Task";
import { StyledTasksContainer } from "@/components/TaskList/style";
import { taskList } from "@/redux/tasks/selectors";
import { getTaskList, setCompletedStatus } from "@/redux/tasks/action";
import { taskType } from "@/types/taskTypes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "@/components/EmptyList";

const TaskList: React.FC<any> = ({ taskList, heading }) => {
  const dispatch = useDispatch();

  const handleTaskCheckboxChange = (task: taskType) => {
    task;
    const payload = {
      id: task.id,
      status: task.status,
      task_name: task.task_name,
      is_important: task.is_important,
    };
    dispatch(setCompletedStatus(payload));
    payload;
  };

  React.useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return (
    <StyledTasksContainer>
      {taskList?.map((task: taskType) => (
        <Task
          key={task?.id}
          id={task?.id}
          task_name={task?.task_name}
          status={task?.status}
          is_important={task?.is_important}
        />
      ))}
      {!taskList.length && (
        <div className="empty-list">
          <EmptyList innerText={heading} />
        </div>
      )}
    </StyledTasksContainer>
  );
};

export default TaskList;
