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
  const [isNexgenClicked, setIsNexGenClicked] = useState<boolean>(false);
  const [isSignOutClicked, setIsSignedOutClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  // När man är inloggad ska man komma till all courses
  const handleNexGen = () => {
    setIsNexGenClicked(!isNexgenClicked);
    console.log("NexGen is clicked");
    navigate("/");
  };

  const handleBurger = () => {
    setisBugerOpen(!isBurgerOpen);
  };

  // MEN BARA OM MAN ÄR INLOGGAD!
  // Måste ändra senare!
  const handleAccount = () => {
    setIsAccountIconClicked(!isAccountIconClicked);
    console.log("click");
    navigate("/myaccount");
  };

  const handleSignOut = () => {
    setIsSignedOutClicked(!isSignOutClicked);
    console.log("Sign out button is clicked");
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
            <Link to="/" className="style-links-nav">
              Home
            </Link>
            <Link to="/myaccount" className="style-links-nav">
              My account
            </Link>
            <Link to="/allcourses" className="style-links-nav">
              All courses
            </Link>
            <Link to="/htmlandcss" className="style-links-nav">
              HTML and CSS
            </Link>
            <Link to="/javascript" className="style-links-nav">
              Javascript
            </Link>
            <Link to="/typescript" className="style-links-nav">
              Typescript
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
