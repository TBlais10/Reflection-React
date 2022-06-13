import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Profiles from "../Profile/Profiles";
import JournalEntry from "../components/JournalEntry/JournalEntry";
import Account from "../Account/Account";
import ViewEntry from "../components/JournalEntry/ViewEntry";

const AppRouter = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newEntry" element={<JournalEntry />} />
        <Route path="/viewEntries" element={<ViewEntry />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:proId" element={<Account />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
