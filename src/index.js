import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
<MantineProvider theme={theme}>
    <App />
</MantineProvider>
);
reportWebVitals();
