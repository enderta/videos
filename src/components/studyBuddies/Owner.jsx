import React from 'react';

const Owner = (props) => {
    const [email, setEmail] = React.useState(localStorage.getItem('email'));
    const [to, setTo] = React.useState(props.owner.email);
    const [subject, setSubject] = React.useState("Study Buddy");
    const [message, setMessage] = React.useState("Hello, I would like to study with you.");


    const sendEmail = async (e) => {
        e.preventDefault();
        const data = {
            email,
            to,
            subject,
            message
        };
        if (email === "" || to === "" || subject === "" || message === "") {
            alert("Please fill all fields");
        }else{
            const response = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log(response);
            const content = await response.json();
            console.log(content);
            alert("Email sent successfully");
            window.location.reload();
        }

    };
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/availability/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {

            })
        window.location.reload();
    }

    return (

            <tr>
            <td>{props.owner.name}</td>
            <td>
                <button className="btn btn-outline-info" onClick={sendEmail}>Send Email</button>
            </td>
            <td>{new Date(props.owner.availability_date).toLocaleDateString()}</td>
            <td>{props.owner.topic}</td>

        </tr>


    );
};

export default Owner;