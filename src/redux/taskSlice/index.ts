import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskStateType } from "@/types/taskTypes";

const initialState: taskStateType = {
  tasks: null,
  isLoading: false,
  errors : '',
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasksStart(state) {
      state.isLoading = true;
      state.errors = '';
    },
    fetchTasksSuccess(state, action) {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    fetchTasksFailure(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure } = taskSlice.actions;

export default taskSlice.reducer;
