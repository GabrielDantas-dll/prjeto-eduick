import React from "react";
import "./Header.css";
import MainNav from './mainNav/MainNav';
import headerLogo from "../../images/header-logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Header() {

  

  // Feature to open 

  return (
    <div className="header">
      <div className="header__bars-icon" >
        <FontAwesomeIcon  icon="bars" />
      </div>
      <div className="header__logo">
        <img src={headerLogo} />
      </div>
      <MainNav />
    </div>
  );
}

export default Header;
