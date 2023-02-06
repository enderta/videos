import React from 'react';
import Rating from "./Rating.jsx";
import Card from "react-bootstrap/Card";

const VideoCards = (props) => {

    let src='https://www.youtube.com/embed/'+props.video.url.split('=')[1];
    if(props.video.url.split('=')[1].includes('&')){
        src='https://www.youtube.com/embed/'+props.video.url.split('=')[1].split('&')[0];

    }
    console.log(src);
    return (
        <div>
            <div className="container">


                    <div>
                        <iframe
                            style={{"height": "500px", 'weihgt': "200px"}} className="card-img-top" alt={props.video.Title}
                            src={src}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                            </div>
                        <div className="card-body">
                            <p className="card-text">{props.video.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <Rating id={props.video}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


    );
};

export default VideoCards;