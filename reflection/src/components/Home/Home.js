import React from "react";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import splashImg from "../../assets/splash_reflect.jpg"

const Home = () => {
    return(
            <Container>
                <Splash
                    image={splashImg} style={{
                        color:"#716391"
                    }}>
                <h1 style={{
                    textShadow: '1 px 1px black'
                }}>Welcome to Reflection</h1>
                <h2 style={{
                    textShadow: '1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                }}>
                Share your thoughts, share with others
                </h2>
                </Splash>
            </Container>
    )
}

export default Home;