import { taskStatus } from "@/enum";
import TaskLayout from "@/pages";
import { taskList } from "@/redux/tasks/selectors";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const Completed = () => {
  const taskData = useSelector(taskList);

  const { tasks } = taskData;
  const completedTasks = tasks.filter((task) => task.status === taskStatus.COMPLETED);

  return (
    <>
      <Head>
        <title>Completed</title>
      </Head>
      <TaskLayout tasks={completedTasks} heading="Completed Task" />
    </>
  );
};

export default Completed;
