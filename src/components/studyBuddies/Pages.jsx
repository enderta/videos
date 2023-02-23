import React from 'react';
import {Route, Routes} from "react-router";
import Availibites from "./Availibites";
import LandingPage from "./LandingPage";
import CreateAvailibity from "./CreateAvailibity";
import Login from "./Login";
import Register from "./Register";
const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<LandingPage/>}/>
                <Route path="/home" element={<Availibites/>}/>
                <Route path="/availability" element={<CreateAvailibity/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
};

export default Pages;