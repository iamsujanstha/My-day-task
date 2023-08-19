import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskStateType } from "@/types/taskTypes";

const initialState: taskStateType = {
  tasks: null,
  isLoading: false,
  errors: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTaskList(state) {
      console.log(state)
      state.isLoading = true;
    },

    getTaskListSuccess(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.tasks = payload;
    },

    updateTask(state, { payload }: PayloadAction<any>) {
      state.isLoading = true;
    },

    updateTaskSuccess(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.tasks = payload;
    },
  },
});

export const { getTaskList, getTaskListSuccess, updateTask, updateTaskSuccess } = taskSlice.actions;

export default taskSlice.reducer;
