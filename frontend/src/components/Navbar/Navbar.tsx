import "../Navbar/Navbar.css";
import search from "../../assets/search-icon.png";
import account from "../../assets/account-icon.png";
import burger from "../../assets/burger-menu.png";

function Navbar() {
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
          <img className="icons-nav" src={account} alt="accoutn icon" />
          <img className="icons-nav" src={burger} alt="burger menu icon" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
