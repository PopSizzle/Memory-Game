# Memory Game

## Overview

This memory game is a front end app built with react.js. It demonstrates the use of components and state tracking while incorporating bootstrap into react.


### Table of Contents

* Installation and Usage
* Dependencies and Code Snippet
* Screenshot of the app
* Languages Used
* Authors
* License
* Acknowledgements

## Insatallation and Usage

This memory game will function from the browser for anybody who opens it.

## Dependencies and Code Snippet

the memory game has the following dependencies:

react.js
react-dom
react-scripts
github pages

Here is an example of the code used for tracking the state of the images, sepcifically whether or not they have already been clicked.

```
let dogs = [];
    let score;
    const [getImages, setImages] = useState([]);
    const [getScore, setScore] = useState();

    useEffect(() => {
        setImages([{ src: "./dogPictures/dog1.jpg", clicked:false, id:1 }, { src: "./dogPictures/dog2.jpg", clicked:false, id:2 }, { src: "./dogPictures/dog3.jpg", clicked:false, id:3 },
```

Here is another example of code from this app, showing the stacking of react components and the use of props being handed to a component:

```
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
```

### Sample Team Table

Here is screenshot of the memory game:

![image](screenshot (137).png)


## Languages Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Authors

* Sam Poppe 

- [Link to Github](https://github.com/PopSizzle)
- [Link to LinkedIn](https://www.linkedin.com/in/sam-poppe-623281193/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Shout out to my teacher Jerome Chenetter and my TAS Kerwin Hy and Mahisha Gunasekaran for teaching me all the skills needed for this project.