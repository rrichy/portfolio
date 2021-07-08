import "./styles/css/Welcome.css";

const Welcome = ({ switchPage }) => {
  return (
    <>
      <div id="welcome" onClick={() => switchPage("welcome")}>
        <svg viewBox="0 0 1350 600">
          <text x="50%" y="50%" textAnchor="middle" id="greet">
            Welcome
          </text>
        </svg>
        <a href="#">Click or press any key to continue</a>
      </div>
    </>
  );
};

export default Welcome;
