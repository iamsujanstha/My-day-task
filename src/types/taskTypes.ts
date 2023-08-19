export type taskType = {
    id: string,
    task_name: string,
    status: string,
}

export type taskStateType = {
  tasks: taskType[] | null;
  isLoading: boolean;
  errors: string;
};