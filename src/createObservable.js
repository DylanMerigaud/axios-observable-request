import { Observable, defer } from "rxjs";
import axios from "axios";

const createObservable = (config = {}) =>
  Observable.create(observer => {
    const { _axiosInstance: axiosInstance = axios, ...restConfig } = config;
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    const subscription = defer(() =>
      axiosInstance.request({ ...restConfig, cancelToken })
    ).subscribe(observer);
    return () => {
      source.cancel();
      subscription.unsubscribe();
    };
  });

export default createObservable;
