import React from 'react';
import {Route, Routes} from "react-router";
import Owners from "./Owners";
import LoginReg from "./LoginReg";
import CreateOwner from "./CreateOwner";
import Login from "./Login";
import Register from "./Register";
const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<LoginReg/>}/>
                <Route path="/home" element={<Owners/>}/>
                <Route path="/availability" element={<CreateOwner/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
};

export default Pages;