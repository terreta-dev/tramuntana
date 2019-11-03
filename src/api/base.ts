import axios, { AxiosInstance, AxiosPromise } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const get = <T = any> (url: string): AxiosPromise<T> => {
  return axiosInstance.get(url);
}

