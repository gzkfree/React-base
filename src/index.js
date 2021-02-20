import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import App from "./views/App";
import Store from "./store/index";
import { Provider } from "react-redux";
import { CreateIconfontStyle } from "./assets/iconfont/iconfont";
render(
  <Provider store={Store}>
    <CreateIconfontStyle />
    <App></App>
  </Provider>,
  document.getElementById("root")
);
