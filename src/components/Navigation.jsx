import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import "./Navigation.css";

const Navigation = ({ show, change }) => {
  return (
    <nav id="navigation" className={show ? "" : "hidden"}>
      <div id="nav-wrapper">
        <h1 onClick={() => change("home")}>HOME</h1>
        <h1 onClick={() => change("projects")}>PROJECTS</h1>
        <h1 onClick={() => change("contact")}>CONTACT</h1>
      </div>
      <div id="account-wrapper">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFreeCodeCamp} />
        <FontAwesomeIcon icon={faCodepen} />
      </div>
    </nav>
  );
};

export default Navigation;
