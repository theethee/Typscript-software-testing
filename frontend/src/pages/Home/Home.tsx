import "../Home/Home.css";
import "../../index.css";

function Home() {
  return (
    <>
      <div id="home-container">
        <h1>NexGen</h1>
        <form id="home-form">
          <label className="input-text">Username/emal</label>
          <input id="field-gap" className="sign-in-field" type="text" />
          <label className="input-text">Password</label>
          <input className="sign-in-field" type="password" />
          <a className="links">Forgot your password?</a>
          <button id="sign-in-button">Sing in</button>
          {/* ska vara en länk här */}
          <a className="links">No account? Register here</a>
        </form>
      </div>
    </>
  );
}

export default Home;
