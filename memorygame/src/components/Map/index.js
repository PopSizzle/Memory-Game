import React from "react";
import "./style.css";
import Container from "../Container";
import Card from "../Card";

function Grid(props) {
    return (
        <Container >
            {props.objects.map(object => (
                <Card src={object.src} id={object.id}>    
                </Card>
            ))}
        </Container>
    );   
}

export default Grid;