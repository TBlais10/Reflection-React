import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";

const AppRouter = () => {
    return (
        <div style = {{width: "100%"}}>
        <Navbar />
        <Routes>
            <Route path="/" element = {<Home />} />
        </Routes>

        </div>
    )
}

export default AppRouter;