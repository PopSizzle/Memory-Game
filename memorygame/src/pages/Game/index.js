import React, { useState, useEffect } from "react";
import Container from "../../components/Container"
import Jumbotron from "../../components/Jumbotron";
import Grid from "../../components/Map";

function Game() {
    let dogs = [];
    const[getImages, setImages] = useState([]);

    useEffect(() => {
        setImages([{ src: "./dogPictures/dog1.jpg", clicked: false, id:1},{ src: "./dogPictures/dog2.jpg", clicked: false, id:2},{ src: "./dogPictures/dog3.jpg", clicked: false, id:3},{ src: "./dogPictures/dog4.jpg", clicked: false, id:4},{ src: "./dogPictures/dog5.jpg", clicked: false, id:5},{ src: "./dogPictures/dog6.jpg", clicked: false, id:6},{ src: "./dogPictures/dog7.jpg", clicked: false, id:7},{ src: "./dogPictures/dog8.jpg", clicked: false, id:8},{ src: "./dogPictures/dog9.jpg", clicked: false, id:9},{ src: "./dogPictures/dog10.jpg", clicked: false, id:10},{ src: "./dogPictures/dog11.jpg", clicked: false, id:11},{ src: "./dogPictures/dog12.jpg", clicked: false, id:12}]);
      }, []);

      dogs = getImages;

        return (
            <Container>
                <Jumbotron/>
                <Grid objects={dogs} />
            </Container>
        )
}

export default Game;