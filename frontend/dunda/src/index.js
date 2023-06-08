// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

ReactDOM.render(
  <BrowserRouter>
    <Search />
  </BrowserRouter>,
  document.getElementById("root")
);