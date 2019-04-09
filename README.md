# AxiosObservableRequest

[![npm](https://img.shields.io/npm/v/axios-observable-request.svg)](https://www.npmjs.com/package/axios-observable-request)
[![GitHub last commit](https://img.shields.io/github/last-commit/DylanMerigaud/axios-observable-request.svg)](https://github.com/DylanMerigaud/axios-observable-request.git)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Installation

```
yarn add axios-observable-request
```

or

```
npm install axios-observable-request
```

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
