import "../LandingPage/Landing.css";

function Landing() {
  return (
    <>
      <div id="landing-container">
        <h1>NexGen</h1>
        <h3>Welcom [Username]</h3>
        <div id="my-account">
          <button className="landing-buttons">My account</button>
        </div>
        <div id="saved-courses">
          <button className="landing-buttons">Saved courses</button>
        </div>
        <button id="all-courses" className="landing-buttons">
          All courses
        </button>
      </div>
    </>
  );
}

export default Landing;
