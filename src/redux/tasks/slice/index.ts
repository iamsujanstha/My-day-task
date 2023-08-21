import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskStateType, taskType } from "@/types/taskTypes";

const initialState: taskStateType = {
  tasks: [],
  isLoading: false,
  errors: "",
  searchedTasks: [],
  editableId: "",
  searchedKeyword: "",
  modalOpen: {
    state: false,
    id: "",
  },
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTaskList(state) {
      state;
      state.isLoading = true;
    },

    getTaskListSuccess(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.tasks = payload;
    },

    createTask(state, { payload }: PayloadAction<taskType>) {
      state.isLoading = true;
    },

    createTaskSuccess(state, { payload }: PayloadAction<taskType>) {
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, payload],
      };
    },

    updateTask(state, { payload }: PayloadAction<taskType>) {
      state.isLoading = true;
    },

    updateTaskSuccess(state, { payload }: PayloadAction<taskType>) {
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              task_name: payload.task_name,
            };
          }
          return task;
        }),
      };
    },

    deleteTask(state, { payload }: PayloadAction<{ id: string }>) {
      state.isLoading = true;
    },

    deleteTaskSuccess(state, { payload }: PayloadAction<taskType>) {
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    },

    setCompletedStatus(state, { payload }: PayloadAction<taskType>) {},
    setCompletedStatusSuccess(state, { payload }: PayloadAction<taskType>) {
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

    setImportant(state, { payload }: PayloadAction<taskType>) {},
    setImportantSuccess(state, { payload }: PayloadAction<taskType>) {
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

    setSearchedTasks(state, { payload }: PayloadAction<any>) {
      state.searchedTasks = payload;
    },

    setSearchedKeyword(state, { payload }: PayloadAction<string>) {
      state.searchedKeyword = payload;
    },

    updateTaskListOrder(state, { payload }: PayloadAction<any>) {
      state.tasks = payload;
    },

    setEditableId(state, { payload }: PayloadAction<string>) {
      state.editableId = payload;
    },

    setModalOpen(state, { payload }: PayloadAction<boolean>) {
      state.modalOpen = {
        ...state.modalOpen,
        state: payload,
      };
    },
  },
});

export default taskSlice.reducer;
