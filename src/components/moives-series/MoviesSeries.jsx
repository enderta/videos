import React from 'react';
import ScrollToTop from "./ScrollToTop";
import {Route, Routes} from "react-router";
import HomeNavi from "./HomeNavi";
import Series from "./Series";
import Seasons from "./Seasons";
import Movies from "./Movies";
import './moviesSeries.css'

const MoviesSeries = () => {
    return (<div>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomeNavi/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/series/:id" element={<Seasons/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>



</div>)

};

export default MoviesSeries;