import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";
import { BrowserRouter } from "react-router-dom";
import Main from "./app/main";
import "./reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   {/* <BrowserRouter> */}
  //   {/* <App /> */}
  //   {/* </BrowserRouter> */}
  //   <Main />
  // </React.StrictMode>
  <div>Back css</div>
);
