import React from "react";
import Head from "next/head";
import { taskList } from "@/redux/tasks/selectors";
import { useSelector } from "react-redux";

import { taskStatus } from "@/enum";
import TaskLayout from "@/pages";

const PendingTasks = () => {
  const taskData = useSelector(taskList);
  const todayDate = new Date().getDate();

  const { tasks } = taskData;
  const allTasks = tasks.filter((task) => {
    const taskDay = task.created_at?.split("-")[2].split("T")[0];
    return taskDay !== undefined && parseInt(taskDay) !== todayDate && task.status === taskStatus.ACTIVE;
  });


  return (
    <>
      <Head>
        <title>Pending</title>
      </Head>
      <TaskLayout tasks={allTasks} heading="Pending" />
    </>
  );
};

export default PendingTasks;
