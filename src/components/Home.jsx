import "./styles/css/Home.css";

const Home = () => {
  return (
    <div id="home" className="show-home">
      <div id="data-home">
        <h1>
          Hi, I am&nbsp;
          <span>RASUL RICHY</span>
        </h1>
        <h2>I'm a self-taught web developer.</h2>
        <h2>I love writing code.</h2>
        <h2>I love learning new things.</h2>
        <h1>
          Welcome to my&nbsp;
          <span>PORTFOLIO</span>
        </h1>
      </div>
      <svg className="home-idle">
        <circle cx="50%" cy="50%" r="250" />
      </svg>
    </div>
  );
};

export default Home;
