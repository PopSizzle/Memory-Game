import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
    >
    <img src={props.src} alt="dog picture" />
    </div>
  );
}

export default Card;
