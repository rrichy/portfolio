import { useState, useEffect } from "react";

import "./styles/css/Footer.css";

const Footer = ({ showIcon, onProjects }) => {
  const [onInitial, animating] = useState(true);

  useEffect(() => setTimeout(() => animating(false), 700));
  if (!showIcon) return <footer></footer>;
  else {
    return <footer className={onProjects ? "footer-on-projects" : ""}></footer>;
  }
};

export default Footer;
