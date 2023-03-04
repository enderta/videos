import React from 'react';
import {Link,} from "react-router-dom";
import {Card,Image} from "react-bootstrap";

const LandingPage = () => {

    return (
        <div>
            <div>


                    <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F450104859%2F208583538221%2F1%2Foriginal.20230220-125329?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C121%2C2342%2C1171&s=d9793e7f80723b67d1bf0a23a7f32d63" style={{width:"100%", height:"100vh", objectFit:"cover"}}/>

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
                                        <h1 style={{color:"darkgoldenrod",textAlign:"center",margin:"20px"}}></h1>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>

                                        <br/>

                                        <br/>
                                        <Card className={"btn btn-outline-primary"} style={{margin:"10px", background:"darkblue",width:"200px"}}>
                                            <Link to={"/login"} style={{textDecoration:"none", color:'green',}}>Login</Link>
                                        </Card>
                                        <Card className={"btn btn-outline-primary"} style={{margin:"10px", background:"darkgray",  width:"200px"}}>
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