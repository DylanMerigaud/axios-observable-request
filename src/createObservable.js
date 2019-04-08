import { Observable, defer } from "rxjs";

const createObservable = axiosInstance => config =>
  Observable.create(observer => {
    const source = axiosInstance.CancelToken.source();
    const cancelToken = source.token;
    const subscription = defer(() =>
      axiosInstance.request({ ...config, cancelToken })
    ).subscribe(observer);
    return () => {
      source.cancel();
      subscription.unsubscribe();
    };
  });

export default createObservable;
