import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

import TaskLayout from "@/pages";
import { taskList } from "@/redux/tasks/selectors";

const ImportantTasks = () => {
  const taskData = useSelector(taskList);

  const { tasks } = taskData;
  const allTasks = tasks.filter((task) => task.is_important === true);

  return (
    <>
      <Head>
        <title>Important</title>
      </Head>
      <TaskLayout tasks={allTasks} heading="Important" />
    </>
  );
};

export default ImportantTasks;
