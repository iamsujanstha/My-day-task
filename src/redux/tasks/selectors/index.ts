import { RootState } from "@/redux/tasks/store/store";

export const taskList = (state: RootState) => state.tasks;
export const searchedTasks = (state: RootState) => state.tasks.searchedTasks;
