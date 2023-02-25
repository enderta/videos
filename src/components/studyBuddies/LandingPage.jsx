import React from 'react';
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";

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
        </div>
    );
};

export default LandingPage;