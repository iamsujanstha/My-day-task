import { taskSlice } from "./../slice";

export const {
  getTaskList,
  getTaskListSuccess,
  createTask,
  createTaskSuccess,
  updateTask,
  updateTaskSuccess,
  deleteTask,
  deleteTaskSuccess,
  setCompletedStatus,
  setCompletedStatusSuccess,
  setImportant,
  setImportantSuccess,
  setSearchedTasks,
  updateTaskListOrder,
  setEditableId,
} = taskSlice.actions;
