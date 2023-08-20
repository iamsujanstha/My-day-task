import TaskLayout from "@/pages";
import { searchedTasks } from "@/redux/tasks/selectors";
import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const searchedData = useSelector(searchedTasks);
  return <TaskLayout tasks={searchedData} heading="Searched Tasks" />;
};

export default Search;
