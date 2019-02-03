import React from "react";
import "./style.css";

function Header(props) {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Clicky Game!</h1>
        <h2>Click on an imageto earn points, but don't click on any more than one!</h2>
      </header>
    </React.Fragment>
  )
}

export default Header;
