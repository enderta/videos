import React from 'react';
import {Button} from "react-bootstrap";

const Rating = (props) => {
    const increaseRating = (id) => {
        fetch(`https://server-rpsh.onrender.com/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: props.id.rating + 1})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        window.location.reload();
    }
    const decreaseRating = (id) => {
        fetch(`https://server-rpsh.onrender.com/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: props.id.rating - 1})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        window.location.reload();
    }
    const handleDelete = (id) => {
        fetch(`https://server-rpsh.onrender.com/videos/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        window.location.reload();
    }

    return (
        <div>
            <div className="container">
                <Button style={{margin: '10px'}} variant="danger"
                        onClick={() => handleDelete(props.id.id)}>Delete</Button>
                <Button style={{margin: '10px'}} variant="success"
                        onClick={() => increaseRating(props.id.id)}>+</Button>
                <span style={{color: "darkgreen", margin: "10px"}}>
                    {props.id.rating}
                </span>
                <Button style={{margin: '10px'}} variant="danger" onClick={() => decreaseRating(props.id.id)}>-</Button>
            </div>
        </div>
    );
};

export default Rating;