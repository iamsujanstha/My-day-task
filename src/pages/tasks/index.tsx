import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

import TaskLayout from "@/pages";
import { taskList } from "@/redux/tasks/selectors";

const Tasks = () => {
  const taskData = useSelector(taskList);
  const { tasks } = taskData;

  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>
      <TaskLayout tasks={tasks} heading="My Tasks" />
    </>
  );
};

export default Tasks;
