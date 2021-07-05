import React, { Component, useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  state = {
    showWelcomeScreen: true,
    currentPage: "home",
    navInitiated: false,
    homeInitial: true,
    projectsInitial: true,
    contactInitial: true,
  };

  hideWelcomeScreen = () => {
    const welcome = document.querySelector("#greet");

    welcome.firstChild.setAttribute("class", "hide-welcome");
    welcome.lastChild.remove();

    setTimeout(() => {
      this.setState({ showWelcomeScreen: false, navInitiated: true });
    }, 1000);
  };

  changePage = (page) => {
    this.setState({
      currentPage: page,
      homeInitial: false,
      projectsInitial: false,
      contactInitial: false,
    });
  };

  render() {
    const {
      showWelcomeScreen,
      currentPage,
      homeInitial,
      projectsInitial,
      contactInitial,
    } = this.state;
    return (
      <>
        {showWelcomeScreen && <Welcome show={this.hideWelcomeScreen} />}
        <Navigation show={!showWelcomeScreen} change={this.changePage} />
        {!showWelcomeScreen && (
          <Home page={currentPage} initial={homeInitial} />
        )}
        {!showWelcomeScreen && (
          <Projects page={currentPage} initial={projectsInitial} />
        )}
      </>
    );
  }
}

export default App;
