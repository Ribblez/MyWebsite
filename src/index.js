import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
