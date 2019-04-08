const { createObservableInstance } = require("../lib");
const { Subject, EMPTY } = require("rxjs");
const { map, switchMap, catchError } = require("rxjs/operators");
const axios = require("axios");

const customAxiosInstance = axios.create({
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

const customCreateObservable = createObservableInstance(customAxiosInstance);

const getGoogle2Request = () =>
  customCreateObservable({
    method: "get",
    url: "https://google.com"
  });

const getGoogle2$ = new Subject();
getGoogle2$
  .pipe(
    switchMap(() => {
      console.log("request started");
      return getGoogle2Request().pipe(
        map(response => {
          console.log("succeed");
        }),
        catchError(error => {
          console.log(error);
          return EMPTY;
        })
      );
    })
  )
  .subscribe();

getGoogle2$.next();
getGoogle2$.next();
getGoogle2$.next();
