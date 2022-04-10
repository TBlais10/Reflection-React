import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import FaButton from '../faCommon/FaButton'

const Home = () => {
    return(
            <Container style = {{backgroundColor: "goldenrod"}}>
                <h1>Welcome to Reflection</h1>
                <h2>Share your thoughts, share with others</h2>
            </Container>
    )
}

export default Home;