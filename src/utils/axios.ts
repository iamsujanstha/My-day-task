import axios from "axios";

const TASK_BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000/" : "https://todo-api-yasj.onrender.com/";

const axiosConfigs = {
  // ⏲️ If the api doesnot responds within 7 seconds then the request is cancelled out
  timeout: 7000,
};

const createAxiosInstance = (baseURL: any) =>
  axios.create({
    baseURL,
    ...axiosConfigs,
  });

/* Axios for all types of users  */
const taskAxios = createAxiosInstance(TASK_BASE_URL);

/**
 * ↗️ Request interceptors
 * We can intercept and modify the request before we send the request to the server
 * The config here is the default (no modifications done)
 *
 * @reference https://github.com/axios/axios#interceptors
 */

taskAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { taskAxios };
