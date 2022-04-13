import React from "react";
import {Route, Routes} from 'react-router-dom'
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const AppRouter = () => {
    return (
        <div style = {{
            flexDirection:'column',
            width: "100%"
        }}>
        <Navbar />
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/signup" element = {<Register />} />
        </Routes>

        </div>
    )
}

export default AppRouter;