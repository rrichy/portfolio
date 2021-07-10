import { useState, useEffect } from "react";

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
    </nav>
  );
};

export default Navigation;
