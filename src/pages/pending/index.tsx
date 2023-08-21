import React from "react";
import Head from "next/head";
import { taskList } from "@/redux/tasks/selectors";
import { useSelector } from "react-redux";

import { taskStatus } from "@/enum";
import TaskLayout from "@/pages";

const PendingTasks = () => {
  const taskData = useSelector(taskList);

  const { tasks } = taskData;
  const allTasks = tasks.filter((task) => task.status !== taskStatus.COMPLETED);

  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>
      <TaskLayout tasks={allTasks} heading="Pending" />
    </>
  );
};

export default PendingTasks;
