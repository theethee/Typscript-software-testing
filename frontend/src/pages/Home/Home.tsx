import "../Home/Home.css";
import "../../index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotSignedInPopup from "../../components/Popup/NotSignedIn";

interface HomeProps {
  handleSignIn: () => void;
}

const Home: React.FC<HomeProps> = ({ handleSignIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [showNotSignedInPopup, setShowNotSignedInPopup] = useState(false);
  const [isRegLinkClicked, setIsRegLinkClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignInPopup = () => {
    setShowNotSignedInPopup(false);
  };

  const navigateToReg = () => {
    setIsRegLinkClicked(!isRegLinkClicked);
    navigate("/register");
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData: { username: string; password: string } = {
      username: username,
      password: password,
    };

    try {
      const data = await SignInRequest(userData);

      if (data) {
        handleSignInSuccess(data);
      } else {
        handleSignInError();
      }
    } catch (error) {
      handleSignInError();
      console.log("Något gick fel", error);
    }
  };

  const SignInRequest = async (userData: {
    username: string;
    password: string;
  }) => {
    const res = await fetch("http://localhost:3000/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.ok ? await res.json() : null;
  };

  const handleSignInSuccess = (data: {
    user: { id: string; username: string };
  }) => {
    const userId = data.user.id;
    const username = data.user.username;
    localStorage.setItem("username", username);
    localStorage.setItem("userId", userId);
    localStorage.setItem("isSignedIn", "true");

    console.log("data.username", data.user.username);
    console.log("data", data);

    handleSignIn();
    navigate("/landingpage");
  };

  const handleSignInError = () => {
    console.error("Fel användare eller löseornd");
    setShowNotSignedInPopup(true);
  };

  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");

    if (isSignedIn === "true") {
      console.log("Användare är inloggad");
      navigate("/landingpage");
    } else {
      console.log("Användaren är inte inloggad");
    }
  }, []);

  return (
    <>
      <div id="home-container">
        <h1 style={{ fontSize: "50px" }}>NexGen</h1>
        <form onSubmit={handleSignInSubmit} id="home-form">
          <label className="input-text" htmlFor="username">
            Username/emal
          </label>
          <input
            id="username"
            className="sign-in-field"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label className="input-text" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="sign-in-field"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a className="links">Forgot your password?</a>
          <button id="sign-in-button">Sign in</button>
          <a id="reg-link" className="links" onClick={navigateToReg}>
            No account? Register here
          </a>
        </form>
        {showNotSignedInPopup && (
          <NotSignedInPopup onClose={handleSignInPopup}></NotSignedInPopup>
        )}
      </div>
    </>
  );
};

export default Home;
