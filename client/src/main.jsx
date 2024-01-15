/// Imports ///
// external
import React from "react";
import ReactDOM from "react-dom/client";
// components
import Router from "./Router";
// assets
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
