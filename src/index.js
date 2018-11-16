import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(<App />, document.getElementById("root"));
