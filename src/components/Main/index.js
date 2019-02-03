import React from "react";
import "./style.css";

function Main(props) {
  return (
    <React.Fragment>
      <div className="container">
        <img className="images" alt={props.name} src={props.image}/>
      </div>
    </React.Fragment>
  )
}

export default Main;
