import React from 'react';

const HomeNavi = () => {
    return (
        <div>
            <div>
                <video autoPlay loop muted>
                    <source
                        src={require('./pexels-gamol-10532470.mp4')}
                        type="video/mp4"
                    />

                </video>
                <div className="container">
                    <button type="button" className='home_link1'  >
                       <a className='home_link1_a'  href="/series" > <h1 className="link_text1" >Series</h1></a>
                    </button>
                    <button type="button" className='home_link2'  >
                      <a className='home_link2_a' href="/movies" >  <h1 className="link_text2" >Movies</h1></a>
                    </button>
                </div>

            </div>
        </div>


    );
};

export default HomeNavi;