export type taskType = {
  id?: string | undefined;
  task_name?: string | undefined;
  status?: number | undefined;
  is_important?: boolean | undefined;
  created_at?: string | undefined;
};

export type taskStateType = {
  tasks: taskType[];
  isLoading: boolean;
  errors: string;
  searchedTasks: taskType[];
  editableId: string;
  searchedKeyword: string;
  modalOpen: {
    state: boolean;
    id: string;
  };
  theme: {
    color: string;
    img: string;
  };
};
