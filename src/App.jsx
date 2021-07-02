import React, { useState } from "react";

import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import "./App.css";

function App() {
  const [showWelcomeScreen, hideWelcomeScreen] = useState(true);

  return (
    <>
      {showWelcomeScreen && <Welcome hide={hideWelcomeScreen} />}
      <Navigation show={!showWelcomeScreen} />
      {/* <Container /> */}
    </>
  );
}

export default App;
