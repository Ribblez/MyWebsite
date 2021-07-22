import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);
