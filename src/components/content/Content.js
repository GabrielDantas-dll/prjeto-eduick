import React from "react";
import Checkbox from "../checkbox/Checkbox.js";
import {} from "./Content.css";

// This component is called in App.js. Content.js contains 

function Content() {
  return (
    <div className="content">
      <div className="content__top">
        <h1>
          Find you <span>BEST TEACHER</span>
        </h1>
      </div>

      <div className="content__mid">
        <span>
          Whether you are a student trying to find your ideal private <br />
          language teachers/tutors or a teacher trying to find great students
          <br /> for your customised private lessons!
        </span>
      </div>
      <input
        className="mid__input"
        placeholder="Type here what are you looking for"
        type="text"
      />

      <div className="content__bottom">
        <Checkbox />
        <button className="content__bottom-btn">SEARCH</button>
      </div>
    </div>
  );
}

export default Content;
