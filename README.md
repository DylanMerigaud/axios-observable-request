# AxiosObservableRequest

![npm](https://img.shields.io/npm/v/axios-observable-request.svg)

## Features

- Allow Axios to be used in RxJs.
- Auto-Cancel Axios requests when the Observer is canceled (switchMap, unsubscribe).

## Usage

Usage of AxiosObservableRequest with the default Axios config:

```javascript
import createObservable from "axios-observable-request";

createObservable({
  method: "get",
  url: "https://google.com"
});
```

Usage of AxiosObservableRequest with a custom Axios config:

```javascript
import axios from "axios";
import { createObservableInstance } from "axios-observable-request";

const customAxiosInstance = axios.create({
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

const customCreateObservable = createObservableInstance(customAxiosInstance);

customCreateObservable({
  method: "get",
  url: "https://google.com"
});
```

## Examples

You can see examples in the `/examples` folder of the github repository.
