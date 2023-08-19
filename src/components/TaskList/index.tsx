import Task from "@/components/Task";
import { StyledTasksContainer } from "@/components/TaskList/style";
import { taskList } from "@/redux/tasks/selectors";
import { getTaskList, setCompletedStatus } from "@/redux/tasks/action";
import { taskType } from "@/types/taskTypes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskData = useSelector(taskList);

  const { tasks, isLoading } = taskData;

  const [data, setData] = React.useState<taskType[]>(tasks || []);

  const handleTaskCheckboxChange = (task: taskType) => {
    console.log(task);
    const payload = {
      id: task.id,
      status: task.status,
      task_name: task.task_name,
      is_important: task.is_important,
    };
    dispatch(setCompletedStatus(payload));
    console.log(payload);
  };

  React.useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return (
    <StyledTasksContainer>
      {tasks?.map((task: taskType) => (
        <Task
          key={task.id}
          id={task.id}
          task_name={task.task_name}
          status={task.status}
          is_important={task.is_important}
        />
      ))}
    </StyledTasksContainer>
  );
};

export default TaskList;
