import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// import img from "../../images/tic-tac-toe.png";

export const HighlightProject = ({ data }) => {
  const [title, src, csrc, url] = data;
  console.log(`source code: ${csrc}\nurl:${url}`);
  return (
    <div className="highlight-project">
      <img src={process.env.PUBLIC_URL + src} alt={title} />
      <svg className="highlight-project__bracket" height="100%" width="100%">
        <rect className="highlight-project__rect" height="100%" width="100%" />
      </svg>
      <div className="highlight-project__info" text={title}>
        <div className="highlight-project__icons">
          <a href={csrc} target="_blank" referrerPolicy="no-referrer">
            <FontAwesomeIcon icon={faCode} />
          </a>
          {url && (
            <a href={url} target="_blank" referrerPolicy="no-referrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
