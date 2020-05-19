import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
    >
    <img src={props.src} alt="dog picture"  id={props.id} data-id={props.clicked}/>
    </div>
  );
}

export default Card;
