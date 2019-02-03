import React from "react";
import "./style.css";

function Main(props) {
  return (
    <React.Fragment>
        <img className="images" onClick={() => props.handleClick(props.id)} id={props.id} alt={props.name} src={props.image}/>
    </React.Fragment>
  )
}

export default Main;
