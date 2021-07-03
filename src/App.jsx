import React, { useState } from "react";

import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import DataBG from "./components/DataBG";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [showWelcomeScreen, hideWelcomeScreen] = useState(true);
  const [currentPage, changePage] = useState("home");

  return (
    <>
      {showWelcomeScreen && <Welcome hide={hideWelcomeScreen} />}
      <Navigation show={!showWelcomeScreen} change={changePage} />
      <Home show={!showWelcomeScreen} page={currentPage} />
    </>
  );
}

export default App;
