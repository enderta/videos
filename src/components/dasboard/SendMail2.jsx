import React from 'react';
const mg = require('mailgun-js');
const SendMail2 = () => {
    const [form, setForm] = React.useState('');
    const [to, setTo] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        const data = {
            form,
            to,
            subject,
            message
        };
        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await response.json();
        console.log(content);
        alert('Email sent successfully');
        window.location.reload();
    }

    return (
        <div>

        </div>
    );
};

export default SendMail2;