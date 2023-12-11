import "../Footer/Footer.css";
import linkedin from "../../assets/linkedin-icon.png";
import twitter from "../../assets/twitter-icon.png";

function Footer() {
  return (
    <>
      <div id="footer-container">
        <div className="align-p">
          <p className="p-styling">About us</p>
          <p className="p-styling">Contact us</p>
          <p className="p-styling">Career</p>
        </div>
        <div id="align-icons">
          <img className="icons" src={linkedin} alt="linkedin icon" />
          <img className="icons" src={twitter} alt="twitter icon" />
        </div>
        <div className="align-p">
          <p className="p-styling">Privacy policy</p>
          <p className="p-styling">Terms of use</p>
          <p className="p-styling">Cookies</p>
        </div>
        {/* <div id="align-icons">
          <img className="icons" src={linkedin} alt="linkedin icon" />
          <img className="icons" src={twitter} alt="twitter icon" />
        </div> */}
      </div>
    </>
  );
}

export default Footer;
