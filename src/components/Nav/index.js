import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <React.Fragment>
      <nav className="navbar">
        <ul>
          <li>Clicky Game</li>
          <li>Click an image to begin!</li>
          <li>Score : {props.score} | Top : {props.highScore}</li>
        </ul>
      </nav>
    </React.Fragment>
  )};

export default Nav;
