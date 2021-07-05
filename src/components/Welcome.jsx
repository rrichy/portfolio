import "./styles/css/Welcome.css";

const Welcome = ({ show }) => {
  return (
    <>
      <svg
        id="greet"
        viewBox="0 0 1350 600"
        onClick={show}
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
