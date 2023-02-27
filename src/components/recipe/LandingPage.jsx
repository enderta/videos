import React from 'react';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import './recipe.css'
const LandingPage = () => {

    return (
        <div>

            <div className="container">
                <img
                    src={require('./pexels-roman-odintsov-4551832.jpg')}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'relative',
                        opacity: '0.3',
                    }}
                    alt="Cover Image"
                />
                <div className="row">
                    <div className="col-6">
                        <div className="card" style={{

                            padding: '10px',
                            margin: "10px",
                            position: 'absolute',
                            top: '25%',
                            left: "25%",
                            right: "25%",
                            background: "none",
                            border: "none"
                        }}>
                            <div className="card-body" style={{background: "none"}}>
                                <>
                                    <h1 style={{color:"darkgoldenrod",textAlign:"center",margin:"10px"}}>Lets Study</h1>
                                    <Card className={"btn btn-outline-primary"} style={{margin:"10px", background:"none"}}>
                                        <Link to={"/login"} style={{textDecoration:"none", color:'green'}}>Login</Link>
                                    </Card>
                                    <Card className={"btn btn-outline-primary"} style={{margin:"10px", background:"none"}}>
                                        <Link to={"/register"} style={{textDecoration:"none", color:'yellow'}}>Register</Link>
                                    </Card>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;