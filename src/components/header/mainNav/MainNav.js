import React, { useState } from "react";
import Login from "../../login/Login";
import "./MainNav.css";

function MainNav() {

  // Feature to open modal login. 
  const [isModalVisible, setIsModalVisible] = useState(false); 
  
  return (
    <>
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
    </>
  );
}

export default MainNav;
