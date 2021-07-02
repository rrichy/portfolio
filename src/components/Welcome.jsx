import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import "./Welcome.css";

const Welcome = ({ hide }) => {
  return (
    <>
      <svg
        id="greet"
        viewBox="0 0 1350 600"
        onClick={() => {
          document
            .querySelector("#greet")
            .firstChild.setAttribute("class", "hide");

          document.querySelector("#greet").lastChild.remove();
          setInterval(() => hide(false), 1000);
        }}
      >
        <text x="50%" y="50%" textAnchor="middle" className="greet">
          Welcome
        </text>
        <text x="50%" y="60%" textAnchor="middle">
          Click to continue
        </text>
      </svg>
    </>
  );
};

export default Welcome;
