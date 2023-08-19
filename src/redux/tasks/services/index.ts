import { taskAxios as axios } from "@/utils/axios";

export const taskListApi = {
  get: () => {
    return axios.get("tasks/");
  },

  post: (payload: any) => {
    console.log("payload", payload)
    return axios.post("tasks/", payload).then((response) => {
      return response.data;
    });
  },

  put: ({ id, payload }: any) => {
    return axios.put(`tasks/${id}`, payload).then((response) => {
      return response.data;
    });
  },

  delete: ({ id }: any) => {
    return axios.delete(`tasks/${id}`).then((response) => {
      return response.data;
    });
  },
};
