import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const HighlightProject = ({ data }) => {
  const [title, src, csrc, url] = data;
  return (
    <div className="highlight-project">
      <img src={process.env.PUBLIC_URL + "/images/" + src} alt={title} />
      <svg className="highlight-project__bracket" height="100%" width="100%">
        <rect className="highlight-project__rect" height="100%" width="100%" />
      </svg>
      <div className="highlight-project__info" text={title}>
        <div className="highlight-project__icons">
          <a href={csrc} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faCode} />
          </a>
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const NormalProject = ({ data }) => {
  const [title, src, csrc, url] = data;
  return (
    <div className="normal-project">
      <img src={process.env.PUBLIC_URL + "/images/" + src} alt={title} />
      <svg className="normal-project__bracket" height="100%" width="100%">
        <rect className="normal-project__rect" height="100%" width="100%" />
      </svg>
      <div className="normal-project__info" text={title}>
        <div className="normal-project__icons">
          <a href={csrc} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faCode} />
          </a>
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
