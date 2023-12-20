// startup point for client side app

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";

ReactDOM.hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"))