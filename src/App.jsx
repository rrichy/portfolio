import React, { Component, useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import DataBG from "./components/DataBG";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [showWelcomeScreen, hideWelcomeScreen] = useState(true);
  const [currentPage, changePage] = useState("home");
  const [navInitiated, initiate] = useState(false);

  // useEffect(() => {
  //   const home = document.querySelector("#home");
  //   home.classList.remove("show-home");
  //   home.classList.add("hide-home");
  // });

  return (
    <>
      {showWelcomeScreen && <Welcome show={hideWelcomeScreen} nav={initiate} />}
      <Navigation
        show={!showWelcomeScreen}
        change={changePage}
        nav={initiate}
      />
      {!showWelcomeScreen && <Home page={currentPage} initial={navInitiated} />}
      {!showWelcomeScreen && <Projects page={currentPage} />}
    </>
  );
}

// class App extends Component {
//   state = {
//     showWelcomeScreen: true,
//     currentPage: "home",
//   };

//   hideWelcomeScreen = () => {
//     const welcome = document.querySelector("#greet");

//     welcome.firstChild.setAttribute("class", "hide");
//     welcome.lastChild.remove();

//     setTimeout(() => {
//       document.querySelector("#home").className = "show-home";
//       this.setState({ showWelcomeScreen: false });
//     }, 1000);
//   };

//   changePage = (page) => {
//     const { currentPage } = this.state;
//     // const pages = ["home", "projects", "contact"].filter((p) => p !== page);

//     this.setState({ currentPage: page });

//     // try {
//     document
//       .querySelector("#" + currentPage)
//       .classList.remove("show-" + currentPage);
//     document
//       .querySelector("#" + currentPage)
//       .classList.add("hide-" + currentPage);
//     // } catch (err) {
//     //   console.log(err);
//     // }
//     // try {
//     document.querySelector("#" + page).classList.add("show-" + page);
//     document.querySelector("#" + page).classList.remove("hide-" + page);
//     // } catch (err) {
//     //   console.log(err);
//     // }

//     // pages.forEach((p) => {
//     //   try {
//     //     document.querySelector("#" + p).classList.remove("show-" + p);
//     //     document.querySelector("#" + p).classList.add("hide-" + p);
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // });
//     // try {
//     //   document.querySelector("#" + page).classList.remove("hide-" + page);
//     //   document.querySelector("#" + page).classList.add("show-" + page);
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   render() {
//     return (
//       <>
//         {this.state.showWelcomeScreen && (
//           <Welcome hide={this.hideWelcomeScreen} />
//         )}
//         <Navigation
//           show={!this.state.showWelcomeScreen}
//           change={this.changePage}
//         />
//         <Home
//           show={!this.state.showWelcomeScreen}
//           page={this.state.currentPage}
//         />
//         <Projects
//           show={!this.state.showWelcomeScreen}
//           page={this.state.currentPage}
//         />
//       </>
//     );
//   }
// }

export default App;
