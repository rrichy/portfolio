const Home = ({ page, initial }) => {
  return (
    <div
      id="home"
      className={
        initial
          ? "show-home-initial"
          : page === "home"
          ? "show-home"
          : "hide-home"
      }
    >
      <div id="data-home">
        <h1>
          Hi, I am&nbsp;
          <span>RASUL RICHY</span>
        </h1>
        <h2>I'm a self-taught web developer.</h2>
        <h2>I love writing codes.</h2>
        <h2>I love learning new things.</h2>
      </div>
      <svg className="home-idle">
        <circle cx="50%" cy="50%" r="217.5" />
      </svg>
    </div>
  );
};

export default Home;
