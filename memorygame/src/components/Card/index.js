import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      onClick={props.onClick}
    >
    <img src={props.src} alt="dog picture" id={props.id}/>
    </div>
  );
}

export default Card;
