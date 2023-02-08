import React from 'react';
import {useState, useEffect} from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('matrix');
    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9f4b46a`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search.sort((a, b) => a.Year - b.Year));
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div>
            <header id='root' style={{margin: '10px'}}>
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a href="/#" className="nav-link px-2 text-secondary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/series" className="nav-link px-2 text-white">
                                    Series
                                </a>
                            </li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search Movies..."
                                aria-label="Search"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    {movies.length > 0 && movies.map((movie, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow-sm"
                                 style={{background: "black", border: "#D43C31 solid", margin: '2px', padding: '2px'}}>
                                <img src={movie.Poster} style={{"height": "500px", 'weihgt': "200px"}}
                                     className="card-img-top" alt={movie.Title}/>
                                <div style={{color: "green"}} className="card-body">
                                    <p style={{color: "green"}} className="card-text">{movie.Title}</p>
                                    <p style={{color: "green"}} className="card-text">{movie.Year}</p>
                                    <a style={{color: "green"}} href={`https://www.imdb.com/title/${movie.imdbID}/`}
                                       target='_blank' className="card-text">
                                        <button className="btn" style={{color: " #f3ce13", border: "solid 1px"}}>IMDb
                                        </button>
                                    </a>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
        ;
};

export default Movies;