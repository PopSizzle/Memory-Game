import React from "react";
import "./style.css";

function jumbotron () {
    return(
<div className="jumbotron">
  <h1>Welcome to memory game of cute dogs!</h1>
  <p>Each time the page loads, click a new dog. If you click a dog you have already clicked, your score will reset!</p>
</div>
    )
}

export default jumbotron;