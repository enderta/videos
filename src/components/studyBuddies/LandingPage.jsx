import React from 'react';
import {Link} from "react-router-dom";

const LandingPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [err, setErr] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const login = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.token) {

                    localStorage.setItem('token', data.token);
                    window.location.href = '/home';
                } else {
                    alert('Wrong email or password')
                    setErr(true);
                }
            })
            .catch(err => console.log(err))
    }
    const register = (e) => {
        e.preventDefault();
        const user = {
            firstName,
            email,
            password
        }
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                    if (data.token) {
                        alert('You are registered')
                        localStorage.setItem('token', data.token);
                        window.location.href = '/home';
                    } else {
                        alert('Wrong email or password')
                    }
                }
            )
            .catch(err => console.log(err))
        {
            if (err) {
                return (
                    <div className="alert alert-danger" role="alert">
                        Wrong email or password
                    </div>
                )
            }
        }
    }
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