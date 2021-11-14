import React, { useState } from "react";
import "./Header.css";
import Login from "../login/Login.js";
import headerLogo from "../../images/header-logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Header() {

  //Feature to open modal login. 
  const [isModalVisible, setIsModalVisible] = useState(false); 

  return (
    <div className="header">
      <FontAwesomeIcon className="header__bars-icon" icon="bars" />
      <div className="header__logo">
        <img src={headerLogo} />
      </div>
      <div className="header__nav">
        <a href="/">How it works</a>
        <a href="/">About Us</a>
      </div>
      <div className="header__button">
        <button
          className="header__button-getStarted"
          onClick={() => setIsModalVisible(true)}
        >
          Get Started
        </button>
        {isModalVisible ? (
          <Login onClose={() => setIsModalVisible(false)} />
        ) : null}
      </div>
    </div>
  );
}

export default Header;
