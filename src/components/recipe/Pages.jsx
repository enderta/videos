import React from 'react';
import {Route, Routes} from "react-router";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
};

export default Pages;