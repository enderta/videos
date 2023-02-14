import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const SendEmail = () => {
    const [email, setEmail] = React.useState('');
    const [to, setTo] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');


    const sendEmail = async (e) => {
        e.preventDefault();
        const data = {
            email,
            to,
            subject,
            message
        };
        if (email === '' || to === '' || subject === '' || message === '') {
            alert('Please fill all fields');
            console.log(data)
        }else{
            const response = await fetch('http://localhost:3001/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            console.log(response)
            const content = await response.json();
            console.log(content)
       alert('Email sent successfully')
        window.location.reload();
        }
    };
    return (
        <div className="App">
         <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setTo(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
         </div>
        </div>
    );
}


export default SendEmail;