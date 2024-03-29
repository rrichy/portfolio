import React, { Component } from "react";

import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    currentPage: "welcome",
  };

  switchPage = (from, to = "home") => {
    if (from === to) return;

    let duration = 200;
    if (from === "welcome") {
      document.querySelector("#greet").setAttribute("class", "hide-welcome");
      document.querySelector("#welcome").lastChild.remove();

      duration = 1000;
    } else {
      document.querySelector("#" + from).setAttribute("class", "hide-" + from);
    }

    setTimeout(() => {
      this.setState({ currentPage: to });
    }, duration);
  };

  render() {
    const { currentPage } = this.state;
    return (
      <>
        {currentPage === "welcome" && <Welcome switchPage={this.switchPage} />}
        {currentPage !== "welcome" && (
          <Navigation switchPage={this.switchPage} page={currentPage} />
        )}
        {/* <Footer
          onProjects={currentPage === "projects"}
          showIcon={currentPage !== "welcome"}
        /> */}
        {/* <div id="page-container"> */}
        {currentPage === "home" && <Home />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "contact" && <Contact />}
        {/* </div> */}
      </>
    );
  }
}

export default App;
