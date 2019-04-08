import axios from "axios";

import createObservable from "./createObservable";

const createObservableInstance = (axiosInstance = axios) =>
  createObservable(axiosInstance);

export default createObservableInstance;
