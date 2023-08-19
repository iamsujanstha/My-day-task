import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { taskType } from "@/types/taskTypes";
import { fetchError, fetchStart, fetchSuccess } from "@/redux/common/actions";
import { taskListApi } from "@/redux/tasks/services";
import { AxiosResponse } from "axios";
import * as ACTIONS from "@/redux/tasks/taskSlice";

export function* getTaskListSaga() {
  yield put(fetchStart());
  try {
    let statusCode: number = 0;
    const res: { tasks: taskType } = yield call(() => {
      return taskListApi.get().then((res) => {
        statusCode = 200;
        return res;
      });
    });
    if (statusCode === 200) {
      yield put(ACTIONS.getTaskListSuccess(res));
    }
    yield put(fetchSuccess());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* updateTaskSaga(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse = yield action.payload;
    yield put({ type: "updateTaskSuccess", payload: response.data });
  } catch (error) {
    yield put({ type: "updateTaskError", payload: error });
  }
}

export function* taskSaga() {
  yield takeLatest(ACTIONS.getTaskList, getTaskListSaga);
  yield takeLatest(ACTIONS.updateTask, updateTaskSaga);
}
