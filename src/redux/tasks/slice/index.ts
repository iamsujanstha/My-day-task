import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskStateType } from "@/types/taskTypes";

const initialState: taskStateType = {
  tasks: [],
  isLoading: false,
  errors: "",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTaskList(state) {
      console.log(state);
      state.isLoading = true;
    },

    getTaskListSuccess(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.tasks = payload;
    },

    createTask(state, { payload }: PayloadAction<any>) {
      state.isLoading = true;
    },
    createTaskSuccess(state, { payload }: PayloadAction<any>) {
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, payload],
      };
    },

    updateTask(state, { payload }: PayloadAction<any>) {
      state.isLoading = true;
    },
    updateTaskSuccess(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.tasks = payload;
    },

    deleteTask(state, { payload }: PayloadAction<any>) {
      state.isLoading = true;
    },
    deleteTaskSuccess(state, { payload }: PayloadAction<any>) {
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    },

    setCompletedStatus(state, { payload }: PayloadAction<any>) {},
    setCompletedStatusSuccess(state, { payload }: PayloadAction<any>) {
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              status: payload.status,
            };
          }
          return task;
        }),
      };
    },

    setImportant(state, { payload }: PayloadAction<any>) {},
    setImportantSuccess(state, { payload }: PayloadAction<any>) {
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              is_important: payload.is_important,
            };
          }
          return task;
        }),
      };
    },
  },
});

export default taskSlice.reducer;
