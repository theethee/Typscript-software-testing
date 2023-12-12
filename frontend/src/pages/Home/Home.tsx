import "../Home/Home.css";

function Home() {
  return (
    <>
      <div id="home-container">
        <h1>NexGen</h1>
        <p className="input-text">Username/emal</p>
        <input id="field-gap" className="sign-in-field" type="text" />
        <p className="input-text">Password</p>
        <input className="sign-in-field" type="password" />
        <a className="links">Forgot your password?</a>
        <button id="sign-in-button">Sing in</button>
        {/* ska vara en länk här */}
        <a className="links">No account? Register here</a>
      </div>
    </>
  );
}

export default Home;
