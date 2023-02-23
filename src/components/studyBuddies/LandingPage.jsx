import React from 'react';
import {Link} from "react-router-dom";

const LandingPage = () => {
    
    return (
        <div>
            <div>
                <video autoPlay loop muted>
                    <source
                        src={require('./pexels-anthony-shkraba-8064146.mp4')}
                        type="video/mp4"
                    />
                </video>
                <div className="container">
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
                                        <button className={"btn btn-outline-primary"}>
                                            <Link to={"/login"}>Login</Link>
                                        </button>
                                        <button className={"btn btn-outline-primary"}>
                                            <Link to={"/register"}>Register</Link>
                                        </button>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;