import { RootState } from "@/redux/tasks/store/store";

export const taskList = (state: RootState) => state.tasks;
export const searchedTasks = (state: RootState) => state.tasks.searchedTasks;
export const editableId = (state: RootState) => state.tasks.editableId;
export const isModalOpen = (state: RootState) => state.tasks.modalOpen.state;
export const modalId = (state: RootState) => state.tasks.modalOpen.id;
export const searchedKeyword = (state: RootState) => state.tasks.searchedKeyword;
export const themeColor = (state: RootState) => state.tasks.theme;
