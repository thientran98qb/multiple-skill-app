import axios from "axios";
import qs from "query-string";
import { configApi } from "./configApi";

const configAxios = axios.create({
  baseURL: configApi.base_url,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    qs.stringify({ ...params, api_key: configApi.api_key }),
});

configAxios.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);
configAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default configAxios;
