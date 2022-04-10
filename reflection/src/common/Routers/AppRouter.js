import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../../components/Home";

const AppRouter = () => {
    return (
        <div style = {{width: "100%"}}>
        <Routes>
            <Route path="/" element = {<Home />} />
        </Routes>

        </div>
    )
}

export default AppRouter;