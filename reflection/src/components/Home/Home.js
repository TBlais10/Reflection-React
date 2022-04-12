import React from "react";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import splashImg from "../../assets/splash_reflect.jpg"

const Home = () => {
    return(
            <Container>
                <Splash
                    image={splashImg} style={{
                        color:"#1f1f1f"
                    }}>
                </Splash>
                <h1 style={{
                    textShadow: '1 px 1px black'
                }}>Welcome to Reflection</h1>
                <h2>Share your thoughts, share with others</h2>
            </Container>
    )
}

export default Home;