import taskReducer from "@/redux/taskSlice";
import { taskType } from "@/types/taskTypes";
import { combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

export type StateType = {
  tasks: taskType[] | null;
};

export const rootReducers = combineReducers({
  tasks: taskReducer,
});

export function* rootSaga() {
  yield all([]);
}
