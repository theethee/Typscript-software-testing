import "../Navbar/Navbar.css";
import search from "../../assets/search-icon.png";
import account from "../../assets/account-icon.png";
import burger from "../../assets/burger-menu.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isBurgerOpen, setisBugerOpen] = useState<boolean>(false);

  const [isAccountIconClicked, setIsAccountIconClicked] =
    useState<boolean>(false);

  const [isSignOutClicked, setIsSignedOutClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleNexGen = () => {
    setIsAccountIconClicked(false);
    console.log("NexGen is clicked");
    navigate("/");
  };

  const handleBurger = () => {
    setisBugerOpen(!isBurgerOpen);
    setIsAccountIconClicked(false);
  };

  const handleAccount = () => {
    setIsAccountIconClicked(!isAccountIconClicked);

    console.log("click");
    navigate("/myaccount");
  };

  const handleSignOutSubmit = () => {
    setIsSignedOutClicked(!isSignOutClicked);
    console.log("Sign out button is clicked");
    localStorage.removeItem("isSignedIn");
    console.log("Användaren är utloggad");
    navigate("/signedout");
  };

  return (
    <>
      <div id="navbar-container">
        <h1 id="NexGen-nav" onClick={handleNexGen}>
          NexGen
        </h1>
        <div id="align-input-field">
          <div id="input-container">
            <input id="input-field" type="search" />
            <img id="search-icon" src={search} alt="search icon" />
          </div>
        </div>

        <div id="align-icons-nav">
          <img
            id="account-icon"
            className="icons-nav"
            src={account}
            alt="accoutn icon"
            onClick={handleAccount}
          />
          <img
            className="icons-nav"
            onClick={handleBurger}
            src={burger}
            alt="burger menu icon"
          />
        </div>
        {isBurgerOpen && (
          <div id="burger-menu">
            <Link
              style={{ marginTop: "25%" }}
              to="/"
              className="style-links-nav"
            >
              Home
            </Link>
            <Link to="/myaccount" className="style-links-nav">
              My account
            </Link>
            <Link to="/allcourses" className="style-links-nav">
              All courses
            </Link>
            <button id="sign-out-btn" onClick={handleSignOutSubmit}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
