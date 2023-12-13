import "../Navbar/Navbar.css";
import search from "../../assets/search-icon.png";
import account from "../../assets/account-icon.png";
import burger from "../../assets/burger-menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isBurgerOpen, setisBugerOpen] = useState<boolean>(false);

  const handleBurger = () => {
    setisBugerOpen(!isBurgerOpen);
  };

  return (
    <>
      <div id="navbar-container">
        <h1 id="NexGen-nav">NexGen</h1>
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
            {/* <Link to="/">Sign out</Link> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
