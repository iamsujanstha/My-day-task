export type taskType = {
    id: string,
    title: string,
    description: string,
    status: string,
}

export type taskStateType = {
  tasks: taskType[] | null;
  isLoading: boolean;
  errors: string;
};