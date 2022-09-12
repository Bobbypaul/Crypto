import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faWhatsapp,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="center">
          <div className="logo-container">
            <img
              src={require("./Images/Logo.png")}
              alt="logo"
              className="logo"
            />
            CRAPPO
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Resources Links</h2>
            <ul>
              <li>
                <a href="#">Download Whitepapper</a>
              </li>
              <li>
                <a href="#">Smart Token</a>
              </li>
              <li>
                <a href="#">Blockchain Explore</a>
              </li>
              <li>
                <a href="#">Crypto API</a>
              </li>
              <li>
                <a href="#">Interest</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>We accept the following payment systems</h3>
            <div className="payment-con">
              <img src={require("./Images/Visa.png")} alt="logo" />
              <img src={require("./Images/Mastercard.png")} alt="logo" />
              <img src={require("./Images/Bitcoin-footer.png")} alt="logo" />
            </div>
          </div>
        </div>
        <div className="socials-con">
          <h3>© 2022 CRAPPO. All rights reserved.</h3>
          <div className="socials">
            <FontAwesomeIcon className="social-logo" icon={faYoutube} />
            <FontAwesomeIcon className="social-logo" icon={faWhatsapp} />
            <FontAwesomeIcon className="social-logo" icon={faInstagram} />
            <FontAwesomeIcon className="social-logo" icon={faTwitter} />
            <FontAwesomeIcon className="social-logo" icon={faLinkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
