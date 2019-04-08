const { default: createObservable } = require("../lib");
const { Subject, EMPTY } = require("rxjs");
const { map, switchMap, catchError } = require("rxjs/operators");

const getGoogleRequest = () =>
  createObservable({
    method: "get",
    url: "https://google.com"
  });

const getGoogle$ = new Subject();
getGoogle$
  .pipe(
    switchMap(() => {
      console.log("request started");
      return getGoogleRequest().pipe(
        map(response => {
          console.log("succeed");
        }),
        catchError(error => {
          console.log("failed");
          return EMPTY;
        })
      );
    })
  )
  .subscribe();

getGoogle$.next();
getGoogle$.next();
getGoogle$.next();
