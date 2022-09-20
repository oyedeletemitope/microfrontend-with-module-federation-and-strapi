import React from "react";
import ReactDOM from "react-dom";
import Header from "remote/Header";
import View from "./View";
import "./index.css";

const App = () => (
  <div className="container">
    <div>
      <Header />
    </div>
    <div>
      <View />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
