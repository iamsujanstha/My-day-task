import Task from "@/components/Task";
import { StyledTasksContainer } from "@/components/TaskList/style";
import { taskList } from "@/redux/tasks/selectors";
import { taskListApi } from "@/redux/tasks/services";
import { getTaskList } from "@/redux/tasks/taskSlice";
import { taskType } from "@/types/taskTypes";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskData = useSelector(taskList);

  const { tasks, isLoading } = taskData;
  

  console.log(tasks);
  React.useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return (
    <StyledTasksContainer>
      {tasks?.data?.map((task: taskType) => (
        <Task key={task.id} {...task} />
      ))}
    </StyledTasksContainer>
  );
};

export default TaskList;
