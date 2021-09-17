import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const get = <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return axiosInstance
    .get(url, config)
    .then((response: AxiosResponse<T>) => response.data)
    .catch(reason => {
      console.log(reason);
      //Show error in UI
      return Promise.reject(reason);
    });
};
