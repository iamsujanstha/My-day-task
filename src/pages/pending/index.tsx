import { taskStatus } from "@/enum";
import TaskLayout from "@/pages";
import { taskList } from "@/redux/tasks/selectors";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const PendingTasks = () => {
  const taskData = useSelector(taskList);

  const { tasks } = taskData;
  const allTasks = tasks.filter((task) => task.status !== taskStatus.COMPLETED);

  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>
      <TaskLayout tasks={allTasks} heading="Pending Tasks" />
    </>
  );
};

export default PendingTasks;
