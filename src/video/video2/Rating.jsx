import React from 'react';
import {Button} from "react-bootstrap";

const Rating = (props) => {


    const handleIncrease = (id) => {
    props.rt(props.v.map((video) => {
        if (video.id === id) {
            return {...video, rating: video.rating + 1}
        }
        return video;
    }
    ))

    }
    const handleDecrease = (id) => {
       props.rt(props.v.map((video) => {
        if (video.id === id) {
            return {...video, rating: video.rating - 1}
        }
        return video;
       }
         ))

    }
    const handleDelete = (id) => {
        props.rt(props.v.filter((video) => video.id !== id));

    }

    return (
        <div>
            <div className="container">
                <Button style={{margin:'10px'}} variant="danger" onClick={() => handleDelete(props.id.id)}>Delete</Button>
                <Button style={{margin:'10px'}} variant="success" onClick={() => handleIncrease(props.id.id)}>+</Button>
                <span style={{color:"darkgoldenrod",margin:"10px"}}>
                    {"Rating: " + props.id.rating}
                </span>
                <Button style={{margin:'10px'}}  variant="danger" onClick={() => handleDecrease(props.id.id)}>-</Button>

            </div>
        </div>
    );
};

export default Rating;