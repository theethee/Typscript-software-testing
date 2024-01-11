import "../Navbar/Navbar.css";
import search from "../../assets/search-icon.png";
import account from "../../assets/account-icon.png";
import burger from "../../assets/burger-menu.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isBurgerOpen, setisBugerOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLinks = (path: string) => {
    setisBugerOpen(false);
    navigate(path);
  };

  const handleBurger = () => {
    setisBugerOpen(!isBurgerOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("isSignedIn");
    console.log("Användaren är utloggad");
    navigate("/signedout");
    setisBugerOpen(false);
  };

  return (
    <>
      <div id="navbar-container">
        <h1 id="NexGen-nav" onClick={() => handleLinks("/")}>
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
            onClick={() => handleLinks("/myaccount")}
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
              onClick={() => handleLinks("/")}
            >
              Home
            </Link>
            <Link
              to="/myaccount"
              className="style-links-nav"
              onClick={() => handleLinks("/myaccount")}
            >
              My account
            </Link>
            <Link
              to="/allcourses"
              className="style-links-nav"
              onClick={() => handleLinks("/allcourses")}
            >
              All courses
            </Link>
            <button id="sign-out-btn" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
