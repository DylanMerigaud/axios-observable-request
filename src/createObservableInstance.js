import createObservable from "./createObservable";

const createObservableInstance = axiosInstance => config =>
  createObservable({ _axiosInstance: axiosInstance, ...config });

export default createObservableInstance;
