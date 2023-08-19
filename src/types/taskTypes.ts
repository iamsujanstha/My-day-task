export type taskType = {
    id: string,
    task_name: string,
    status: string,
}

export type taskStateType = {
  tasks: taskType[];
  isLoading: boolean;
  errors: string;
};