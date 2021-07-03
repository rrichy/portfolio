const DataBG = () => {
  return (
    <>
      <svg className="data-bg">
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="40%"
            cy="50%"
            r="30%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="transparent" />
            <stop offset="1" stop-color="#ffe6db87" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="90%"
          y="5%"
          style={{
            fill: "url(#radial-gradient)",
            strokeWidth: 3,
            stroke: "rgb(0, 0, 0)",
          }}
        />
      </svg>
      {/* <div className="data-bg"> */}
      <div id="data-container">
        <h1>
          Hi, I am&nbsp;
          <span>RASUL RICHY</span>
        </h1>
        <h2>I'm a self-taught web developer.</h2>
        <h2>I love writing code.</h2>
        <h2>I love learning new things.</h2>
      </div>
      {/* </div> */}
    </>
  );
};

export default DataBG;
