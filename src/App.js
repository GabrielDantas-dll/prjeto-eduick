import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import shapesRight from "./images/shapes-right.svg";
import shapesLeft from "./images/shapes-left.svg";
import homeImage from "./images/home-image.png";
import Content from "./components/content/Content.js";

function App() {

  /*
    App.js encapsulates the main components of the project.
  */ 
  return (
    <div className="App">
      <div className="global">
        <Header />
        <div className="container">
          <div className="shapes-left">
            <img className="home-image" src={homeImage} />
            <img className="shapes-left-svg" src={shapesLeft} />
          </div>
          <Content/>
          <div className="shapes-right">
            <img src={shapesRight} />
          </div>
        </div>
        <div className="footer" />
      </div>
    </div>
  );
}

export default App;