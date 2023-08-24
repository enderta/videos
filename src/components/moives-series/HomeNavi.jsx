import React from 'react';
import image from './pexels-markus-spiske-1089438.jpg';

const HomeNavi = () => {
    return (
        <div className="home_navi" >

            <div className="container">
                <button type="button" className='home_link1'>
                    <a className='home_link1_a' href="/series"> <h1 className="link_text1">Series</h1></a>
                </button>
                <button type="button" className='home_link2'>
                    <a className='home_link2_a' href="/movies"> <h1 className="link_text2">Movies</h1></a>
                </button>
            </div>
        </div>
    );
};

export default HomeNavi;