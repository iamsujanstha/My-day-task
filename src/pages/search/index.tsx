import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import TaskLayout from "@/pages";
import { searchedTasks } from "@/redux/tasks/selectors";
import { useDispatch } from "react-redux";
import { setSearchedKeyword } from "@/redux/tasks/action";

const Search = () => {
  const dispatch = useDispatch();

  /* Empty the searched keyword when unmount */
  useEffect(() => {
    return () => {
      dispatch(setSearchedKeyword(""));
    };
  });

  const searchedData = useSelector(searchedTasks);
  return <TaskLayout tasks={searchedData} heading="Searched" />;
};

export default Search;
