import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./app/globalStyle";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
