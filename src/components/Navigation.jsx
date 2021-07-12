import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

// import Logo from ;
import "./styles/css/Navigation.css";

const Navigation = ({ page, switchPage }) => {
  const [onInitial, animating] = useState(true);

  useEffect(() => setTimeout(() => animating(false), 700));
  return (
    <nav
      id="navigation"
      className={
        (onInitial ? "" : "default-nav") +
        (page === "projects" ? " on-projects" : "")
      }
    >
      <img
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
        alt="Logo"
        id="logo"
      />
      <div id="nav-container">
        <div id="nav-wrapper">
          <a
            href="#"
            className={page === "home" ? "active-page" : ""}
            onClick={() => switchPage(page, "home")}
          >
            HOME
          </a>
          <a
            href="#"
            className={page === "projects" ? "active-page" : ""}
            onClick={() => switchPage(page, "projects")}
          >
            PROJECTS
          </a>
          <a
            href="#"
            className={page === "contact" ? "active-page" : ""}
            onClick={() => switchPage(page, "contact")}
          >
            CONTACT
          </a>
        </div>
        <div id="account-wrapper">
          <a
            href="https://github.com/rrichy"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://codepen.io/rrichy"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>
          <a
            href="https://www.freecodecamp.org/rrichy"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
