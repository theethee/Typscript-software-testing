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

  const [showNotSignedIn, setShowNotSignedIn] = useState(false);
  const [isRegLinkClicked, setIsRegLinkClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignInPopup = () => {
    setShowNotSignedIn(false);
  };

  const navigateToReg = () => {
    setIsRegLinkClicked(!isRegLinkClicked);
    navigate("/register");
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit in HOME");

    const userData = {
      username: username,
      password: password,
    };
    try {
      const res = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        const data = await res.json();

        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("isSignedIn", "true");

        handleSignIn();
        navigate("/landingpage");
      } else {
        console.error("Fel användare eller löseornd");
        setShowNotSignedIn(true);
      }
    } catch (error) {
      console.log("Något gick fel", error);
    }

    // När man skrivit in fel användarnamn eller lösenord ska en Varningspopup dyka upp!

    // IMORGON: Fixa resten av CRUDEN till att ta bort och ändra personuppgifter

    // Tisdag börja med TDD och BDD!

    console.log("username", username);
    console.log("password", password);

    console.log("UserData", userData);
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
        <h1>NexGen</h1>
        <form onSubmit={handleSignInSubmit} id="home-form">
          <label className="input-text" htmlFor="username">
            Username/emal
          </label>
          <input
            // id="field-gap"
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
          {/* Tror Link hade varit bättre här*/}
          <a className="links" onClick={navigateToReg}>
            No account? Register here
          </a>
        </form>
        {showNotSignedIn && (
          <NotSignedInPopup onClose={handleSignInPopup}></NotSignedInPopup>
        )}
      </div>
    </>
  );
};

export default Home;
