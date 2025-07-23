import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router.js";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
