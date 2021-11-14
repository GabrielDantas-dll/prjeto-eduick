import React, { useState } from "react";
import "./Login.css";
import closeModalBtn from "../../images/close-modal-btn.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Login({ id = "modal", onClose = () => {} }) {

  { 
  /* 
    Login component is a file executed when the button Get Started is clicked. Here you`ll find a couple specific features to this modal, such as the "show password" and "close modal".
  */ 
  }

  //function to close modal login if click on modal-login class
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  //Show password visibility
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div id={id} className="modal__background" onClick={handleOutsideClick}> 
      <div className="modal__login">
        <button className="btn__close-modal" onClick={onClose}>
          <img src={closeModalBtn} />
        </button>
        <div className="login__elements">
          <h1>
            Get Started <span>JUST LOGIN</span>
          </h1>
          <form>
            <p>Username: </p>
            <input />
            <p>Password: </p>
            <input type={passwordShown ? "text" : "password"} />
            <FontAwesomeIcon
              className="eyes-icon"
              onClick={togglePasswordVisibility}
              icon={passwordShown ? "eye-slash" : "eye"}
            />
          </form>
        </div>
        <button className="login__btn">
          <strong>LOGIN</strong>
        </button>
      </div>
    </div>
  );
}

export default Login;
