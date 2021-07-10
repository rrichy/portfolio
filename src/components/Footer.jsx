import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/css/Footer.css";

const Footer = ({ showIcon, onProjects }) => {
  const [onInitial, animating] = useState(true);

  useEffect(() => setTimeout(() => animating(false), 700));
  if (!showIcon) return <footer></footer>;
  else {
    return (
      <footer className={onProjects ? "footer-on-projects" : ""}>
        <div id="account-wrapper" className={onInitial ? "" : "default-icons"}>
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
      </footer>
    );
  }
};

export default Footer;
