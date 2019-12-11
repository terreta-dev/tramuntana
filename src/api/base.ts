import axios, { AxiosInstance, AxiosPromise } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const get = <T = any> (url: string): AxiosPromise<T> => {
  return axiosInstance.get(url);
}

