export type taskType = {
  id?: string | undefined;
  task_name?: string | undefined;
  status?: number | undefined;
  is_important?: boolean | undefined;
};

export type taskStateType = {
  tasks: taskType[];
  isLoading: boolean;
  errors: string;
  searchedTasks: taskType[];
};
