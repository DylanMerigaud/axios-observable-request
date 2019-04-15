import axios from "axios";
import { createObservableInstance } from "axios-observable-request";

export const customAxiosConfig = {
  baseURL: "https://jsonplaceholder.typicode.com"
};

export const customAxiosInstance = axios.create(customAxiosConfig);

export const createObservableRequest = createObservableInstance(
  customAxiosInstance
);
