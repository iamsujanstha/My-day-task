import { taskAxios as axios } from "@/utils/axios";

export const taskListApi = {
  get: () => {
    return axios.get("/tasks");
  },

  post: ({ payload }: any) => {
    return axios.post("/", payload).then((response) => {
      return response.data;
    });
  },

  put: ({ payload }: any) => {
    return axios.put("/", payload).then((response) => {
      return response.data;
    });
  },

  delete: ({ payload }: any) => {
    return axios.delete("/", payload).then((response) => {
      return response.data;
    });
  },
};
