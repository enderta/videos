import React from 'react';
import Cars from "./Cars";
import AddCars from "./AddCars";
import CreateOwner from "./CreateOwner";
import owners from "./Owners";

const Owner = (props) => {

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
            <td>{props.owner.email}</td>
            <td>{new Date(props.owner.availability_date).toLocaleDateString()}</td>
            <td>{props.owner.topic}</td>

        </tr>

    );
};

export default Owner;