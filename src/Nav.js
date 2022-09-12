import { useRef } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let phoneMenu = useRef(null);
  const handleMenu = function () {
    phoneMenu.style.width = "100%";
  };
  const handleClose = function () {
    phoneMenu.style.width = "0%";
  };
  return (
    <nav>
      <div className="all-nav-con con">
        <div className="logo-container">
          <img src={require("./Images/Logo.png")} alt="logo" className="logo" />
          CRAPPO
        </div>
        <div className="menu-bar-con">
          <FontAwesomeIcon
            onClick={function () {
              handleMenu();
            }}
            className="menu-bar"
            icon={faBars}
          />
        </div>
        <ul className="desktop-Menu">
          <li>
            Products<div className="loader"></div>
          </li>
          <li>
            Features<div className="loader"></div>
          </li>
          <li>
            About<div className="loader"></div>
          </li>
          <li>
            Contact<div className="loader"></div>
          </li>
          <li>
            Login<div className="loader"></div>
          </li>
          <li className="space"></li>
          <li className="register">Register</li>
        </ul>
      </div>
      <div
        ref={function (el) {
          phoneMenu = el;
        }}
        className="phone-Menu"
      >
        <FontAwesomeIcon
          onClick={function () {
            handleClose();
          }}
          className="cancel"
          icon={faTimes}
        />
        <ul>
          <li>
            Products<div className="loader"></div>
          </li>
          <li>
            Features<div className="loader"></div>
          </li>
          <li>
            About<div className="loader"></div>
          </li>
          <li>
            Contact<div className="loader"></div>
          </li>
          <div className="login-con">
            <li>
              Login<div className="loader"></div>
            </li>
            <li className="space"></li>
            <li className="register">Register</li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
