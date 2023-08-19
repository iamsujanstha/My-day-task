export type taskType = {
  id: string;
  task_name: string;
  status: number;
  is_important: boolean;
};

export type taskStateType = {
  tasks: taskType[];
  isLoading: boolean;
  errors: string;
};
