import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { taskType } from "@/types/taskTypes";
import { fetchError, fetchStart, fetchSuccess } from "@/redux/common/actions";
import { taskListApi } from "@/redux/tasks/services";
import { AxiosResponse } from "axios";
import * as ACTIONS from "@/redux/tasks/action";

/* ================================ FETCH TASKS ============================================== */
export function* getTaskListSaga() {
  yield put(fetchStart());
  ("gettask");
  try {
    let statusCode: number = 0;
    const res: { tasks: taskType } = yield call(() => {
      return taskListApi.get().then((res) => {
        statusCode = 200;
        return res.data;
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

/* ================================ CREATE TASK ==============================================*/
export function* createTaskSaga({ payload }: ReturnType<typeof ACTIONS.createTask>) {
  yield put(fetchStart());
  try {
    let statusCode: number = 0;
    const res: { tasks: taskType } = yield call(() => {
      return taskListApi.post(payload).then((res) => {
        statusCode = 200;
        return res;
      });
    });

    yield put(ACTIONS.createTaskSuccess(res));
    yield put(fetchSuccess());
  } catch (error) {
    yield put(fetchError());
  }
}

/* ================================ UDATE TASK ================================================== */
export function* updateTaskSaga(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse = yield action.payload;
    yield put({ type: "updateTaskSuccess", payload: response.data });
  } catch (error) {
    yield put({ type: "updateTaskError", payload: error });
  }
}

/* ================================ DELETE TASK ================================================== */
export function* deleteTaskSaga(action: PayloadAction<any>) {
  yield put(fetchStart());

  try {
    let statusCode: number = 0;
    const { id } = action.payload;
    action;
    const res: { tasks: taskType } = yield call(() => {
      return taskListApi.delete(id).then((res) => {
        statusCode = 200;
        return id;
      });
    });
    if (statusCode === 200) {
      yield put(ACTIONS.deleteTaskSuccess(res));
    }
    yield put(fetchSuccess());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* setCompletedStatusSaga(action: PayloadAction<any>) {
  yield put(fetchStart());

  try {
    let statusCode: number = 0;
    const { id, ...rest } = action.payload;

    const res: { tasks: taskType } = yield call(() => {
      return taskListApi.put(id, rest).then((res) => {
        statusCode = 200;
        return res;
      });
    });
    if (statusCode === 200) {
      yield put(ACTIONS.setCompletedStatusSuccess(res));
    }
    yield put(fetchSuccess());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* setImportantSaga(action: PayloadAction<any>) {
  yield put(fetchStart());

  try {
    let statusCode: number = 0;
    const { id, ...rest } = action.payload;

    const res: { tasks: taskType } = yield call(() => {
      return taskListApi.put(id, rest).then((res) => {
        statusCode = 200;
        return res;
      });
    });
    if (statusCode === 200) {
      yield put(ACTIONS.setImportantSuccess(res));
    }
    yield put(fetchSuccess());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* taskSaga() {
  yield takeLatest(ACTIONS.getTaskList, getTaskListSaga);
  yield takeLatest(ACTIONS.createTask, createTaskSaga);
  yield takeLatest(ACTIONS.updateTask, updateTaskSaga);
  yield takeLatest(ACTIONS.deleteTask, deleteTaskSaga);
  yield takeLatest(ACTIONS.setCompletedStatus, setCompletedStatusSaga);
  yield takeLatest(ACTIONS.setImportant, setImportantSaga);
}
