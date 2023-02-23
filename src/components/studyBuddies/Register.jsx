import React from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Register = () => {
    const [name, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [err, setErr] = React.useState(false);
    const handleChange = (e) => {
        if (e.target.name === 'firstName') {
            setFirstName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const register = (e) => {
        e.preventDefault();
        const user = {
            name,
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
                    window.location.href = '/login';
                }
                else {
                    window.location.href = '/login';
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
           <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <Form style={{ width: '50%', margin: 'auto' }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                            </Form.Group>
                            <Button variant="outline-success" style={{margin:'10px'}} type="submit" onClick={register}>
                                Register
                            </Button>
                        </Form>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Register;