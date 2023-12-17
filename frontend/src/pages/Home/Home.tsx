import "../Home/Home.css";
import "../../index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit in HOME");

    localStorage.setItem("isSignedIn", "true");
    navigate("/allcourses");

    console.log("username", username);
    console.log("password", password);

    useEffect(() => {
      const isSignedIn = localStorage.getItem("isSignedIn");

      if (isSignedIn) {
        console.log("Användare är inloggad");
        navigate("/allcourses");
      } else {
        console.log("Användaren är inte inloggad");
      }
    });
  };

  return (
    <>
      <div id="home-container">
        <h1>NexGen</h1>
        <form onSubmit={handleSignIn} id="home-form">
          <label className="input-text">Username/emal</label>
          <input
            id="field-gap"
            className="sign-in-field"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label className="input-text">Password</label>
          <input
            className="sign-in-field"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a className="links">Forgot your password?</a>
          <button id="sign-in-button">Sign in</button>
          {/* ska vara en länk här */}
          <a className="links">No account? Register here</a>
        </form>
      </div>
    </>
  );
}

export default Home;
