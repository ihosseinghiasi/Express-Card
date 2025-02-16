import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <App />
  </ConfigProvider>
);
reportWebVitals();
