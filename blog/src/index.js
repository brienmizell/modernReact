import React from "react";
import ReactDOM from "ReactDOM";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <app />
  </Provider>,
  document.querySelector("#root")
);
