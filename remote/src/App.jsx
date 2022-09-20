import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "./index.css";

const App = () => (
  <div className="container">

    <div><Header/></div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
