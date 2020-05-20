import React, { useState, useEffect } from "react";
import Container from "../../components/Container"
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";


function Game() {
    let dogs = [];
    let score;
    const [getImages, setImages] = useState([]);
    const [getScore, setScore] = useState();

    useEffect(() => {
        setImages([{ src: "./dogPictures/dog1.jpg", clicked:false, id:1 }, { src: "./dogPictures/dog2.jpg", clicked:false, id:2 }, { src: "./dogPictures/dog3.jpg", clicked:false, id:3 }, { src: "./dogPictures/dog4.jpg", clicked:false, id:4 }, { src: "./dogPictures/dog5.jpg", clicked:false, id:5 }, { src: "./dogPictures/dog6.jpg", clicked:false, id:6 }, { src: "./dogPictures/dog7.jpg", clicked:false, id:7 }, { src: "./dogPictures/dog8.jpg", clicked:false, id:8 }, { src: "./dogPictures/dog9.jpg", clicked:false, id:9 }, { src: "./dogPictures/dog10.jpg", clicked:false, id:10 }, { src: "./dogPictures/dog11.jpg", clicked:false, id:11 }, { src: "./dogPictures/dog12.jpg", clicked:false, id:12 }]);

        setScore(0);
    }, []);

    dogs = shuffle(getImages);
    score = getScore;

    function shuffle(arr) {
        let j, x;
        for(let i=arr.length -1; i>0; i--) {
            j = Math.floor(Math.random() * (i+1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    function reset() {
        
        for(let i=0; i<dogs.length; i++){
            dogs[i].clicked = false;
        }
        setImages(dogs);
        setScore(0);
    }

    function handleClick(e) {
        let thisDog = e.target;
        let value = parseInt(thisDog.id);
        console.log(value);
        for(let i=0; i<dogs.length; i++) {
            if(dogs[i].id === value){
                console.log("found dog!");

                if(dogs[i].clicked){
                    return reset();
                }
                else {
                    dogs[i].clicked = true;
                    setImages(dogs);
                    score += 100;
                    setScore(score);
                    return
                }
            }
            else{
                console.log("wrong dog");
            }
        }
        return console.log("dog not found");
    }

    return (
        <Container>
            <Jumbotron />
            <h3>Score: {score}</h3>
            <Container >
                {dogs.map(object => (
                    <Card src={object.src} key={object.id} id={object.id} onClick={handleClick}>
                    </Card>
                ))}
            </Container>
        </Container>
    )
}

export default Game;