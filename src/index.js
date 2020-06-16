import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App.js";
import  'react-bootstrap';
import 'bootswatch/dist/pulse/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
