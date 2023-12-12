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
        <a>Forgot your passowrd?</a>
        <input id="sign-in-button" type="submit" value="Sign in" />
        <p>
          No account? <a>Register here</a>
        </p>
      </div>
    </>
  );
}

export default Home;
