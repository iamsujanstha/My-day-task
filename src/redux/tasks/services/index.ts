import { taskType } from "@/types/taskTypes";
import { taskAxios as axios } from "@/utils/axios";

export const taskListApi = {
  get: () => {
    return axios.get("tasks/");
  },

  post: (payload: taskType) => {
    return axios.post("tasks/", payload).then((response) => {
      return response.data;
    });
  },

  put: (id: number, payload: number | string) => {
    return axios.put(`tasks/${id}`, payload).then((response) => {
      return response.data;
    });
  },

  delete: (id: number) => {
    return axios.delete(`tasks/${id}`).then((response) => {
      return response.data;
    });
  },
};
