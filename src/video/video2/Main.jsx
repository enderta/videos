import React from 'react';
import data from './exampleresponse.json'
import VideoCard  from "./VideoCard.jsx";
import AddVideo from "./AddVideo.jsx";


const Main = () => {
    const [videos, setVideos] = React.useState(data);
    const [filtered, setFiltered] = React.useState(videos);

    const handleSearch = (e) => {
        if(e.target.value === ''){
            setFiltered(videos);
        }else{
            setFiltered(videos.filter((video) => video.title.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }


    return (
        <div>
           {/* <input type="text" placeholder="Search" onChange={handleSearch}/>*/}
            <AddVideo data={setVideos} videos={videos}/>
            {videos.map((video, index) => (
                <div>
                    <VideoCard video={video} data={setVideos} videos={videos}/>

                </div>
            ))}

        </div>
    );
};

export default Main;