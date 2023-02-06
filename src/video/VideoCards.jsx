import React from 'react';
import Rating from "./Rating.jsx";

const VideoCards = (props) => {

    let src='https://www.youtube.com/embed/'+props.video.url.split('=')[1];
    if(props.video.url.split('=')[1].includes('&')){
        src='https://www.youtube.com/embed/'+props.video.url.split('=')[1].split('&')[0];

    }
    console.log(src);
    return (
        <div>
            <div className="container">
                            <div className="card mb-4 shadow-sm" >
                             <div>
                                 <h6 style={{color:"#D43C31"}}>{props.video.title}</h6>
                                 <span>

                                     <Rating id={props.video}/>
                                 </span>
                             </div>

                                <iframe
                                     className="card-img-top" alt={props.video.Title}
                                    src={src}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                        </div>
        </div>
    );
};

export default VideoCards;