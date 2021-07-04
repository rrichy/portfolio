import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import "./Welcome.css";

const Welcome = ({ show, nav }) => {
  return (
    <>
      <svg
        id="greet"
        viewBox="0 0 1350 600"
        onClick={() => {
          const welcome = document.querySelector("#greet");

          // console.log(welcome.firstElementChild);
          welcome.firstChild.setAttribute("class", "hide-welcome");
          welcome.lastChild.remove();

          // setTimeout(() => {
          //   // document.querySelector("#home").className = "show-home";
          //   console.log("hello!");
          // }, 1200);

          setTimeout(() => {
            show(false);
            nav(true);
          }, 1000);
        }}
        // className={show ? "" : "hide"}
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
