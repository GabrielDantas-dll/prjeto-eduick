import React from "react";
import {} from "./Checkbox.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Checkbox() {
  return (
    <div className="wrapper">
      <input type="radio" name="select" id="option-1" />
      <input type="radio" name="select" id="option-2" />
      <label htmlFor="option-1" className="option option-1">
        <FontAwesomeIcon
          htmlFor="option-1"
          className="check-icon"
          icon="check"
        />
        <div className="dot"></div>
        <span>i’m a teacher</span>
      </label>
      <label htmlFor="option-2" className="option option-2">
        <FontAwesomeIcon
          htmlFor="option-2"
          className="check-icon"
          icon="check"
        />
        <div className="dot"></div>

        <span>i’m a student</span>
      </label>
    </div>
  );
}

export default Checkbox;
