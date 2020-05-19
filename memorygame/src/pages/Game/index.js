import React, { useState } from "react";
import Container from "../../components/Container"
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

function Game() {
    const[getImages, setImages] = useState([]);

    setImages([{ src: "./dogPictures/dog1.jpg", clicked: false},{ src: "./dogPictures/dog2.jpg", clicked: false},{ src: "./dogPictures/dog3.jpg", clicked: false},{ src: "./dogPictures/dog4.jpg", clicked: false},{ src: "./dogPictures/dog5.jpg", clicked: false},{ src: "./dogPictures/dog6.jpg", clicked: false},{ src: "./dogPictures/dog7.jpg", clicked: false},{ src: "./dogPictures/dog8.jpg", clicked: false},{ src: "./dogPictures/dog9.jpg", clicked: false},{ src: "./dogPictures/dog10.jpg", clicked: false},{ src: "./dogPictures/dog11.jpg", clicked: false},{ src: "./dogPictures/dog12.jpg", clicked: false},]);

    return
}