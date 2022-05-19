import React from "react";
import {Route, Routes} from 'react-router-dom'
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Profiles from "../Profile/Profiles";
import JournalEntry from "../components/JournalEntry/JournalEntry";
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
            <Route path="/login" element = {<Login />}  />
            <Route path="/profiles" element = {<Profiles />} />
            <Route path="/newEntry" element = {<JournalEntry />} />
        </Routes>

        </div>
    )
}

export default AppRouter;