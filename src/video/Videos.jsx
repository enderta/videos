import React from 'react';
import {Container, Form,Row,Col} from "react-bootstrap";
import NewVideo from "./NewVideo.jsx";
import VideoCards from "./VideoCards.jsx";


const Videos = () => {
    const [videos, setVideos] = React.useState([]);
    const [filtered, setFiltered] = React.useState(videos);
    const handleSort = (e) => {
        e.preventDefault();
        fetch('https://server-rpsh.onrender.com/videos/sort')
            .then(res => res.json())
            .then(data => {
                    setVideos(data);
                    setFiltered(data);
                }
            );
    }
    React.useEffect(() => {
        fetch('https://server-rpsh.onrender.com/videos')
            .then(res => res.json())
            .then(data => {
                setVideos(data.sort((a, b) => b.rating - a.rating));
                setFiltered(data.sort((a, b) => b.rating - a.rating));

            })
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if(e.target.value === ''){
            setFiltered(videos);
        }else{
            setFiltered(videos.filter((video) => video.title.toLowerCase().includes(e.target.value.toLowerCase())).sort((a, b) => b.rating - a.rating));
        }
    }
    //sort button function to sort the videos by rating




    return (
        <>
            <div style={{margin:"10px"}}>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{textAlign:"center",color:"darkgreen"}}>Video List</h1>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Search" onChange={handleSearch}/>
                        </Col>
                        <Col>
                            <NewVideo/>
                        </Col>
                    </Row>
                </Container>
                <div className="container">
                    <div className="row">
                        {
                            filtered.map((video) => {
                                    return (
                                        <div className="col-md-6" >
                                            <div className="card mb-4 shadow-sm" style={{background:"black",border:"#D43C31 solid",margin:'2px',padding:'2px'}}>


                                                    <VideoCards video={video}/>

                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>
                </div>
            </div>


        </>

    );
};

export default Videos;