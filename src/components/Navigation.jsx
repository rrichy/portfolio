import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/css/Navigation.css";

const Navigation = ({ page, switchPage }) => {
  return (
    <nav id="navigation" className="show-nav">
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
    </nav>
  );
};

export default Navigation;
