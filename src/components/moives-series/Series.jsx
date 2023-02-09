import React from 'react';

import './series.css';
const Series = () => {
    const [show, setShow] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filtered, setFiltered] = React.useState([]);

    React.useEffect(() => {
            fetch('https://api.tvmaze.com/shows')
                .then(response => response.json())
                .then(data => {
                    setShow(data);
                    setFiltered(data.sort((a, b) => a.name.localeCompare(b.name)));

                });
        }
        , []);

    const handleChange = (event) => {
        setSearch(event.target.value);
        setFiltered(show.filter((show) => show.name.toLowerCase().includes(search.toLowerCase())));
    }


    return (
        <div >
            <header id='root' style={{margin:'10px'}}>
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
                                <a href="/movies" className="nav-link px-2 text-white">
                                    Movies
                                </a>
                            </li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search..."
                                aria-label="Search"
                                onChange={handleChange}

                            />
                        </form>
                    </div>
                </div>
            </header>

                <div className="container">
                    <div className="row">
                            {
                                filtered.map((item) => {
                                        return (
                                            <div className="col-md-4" >
                                                <div className="card mb-4 shadow-sm"
                                                     style={{background: "black", border: "#D43C31 solid", margin: '2px', padding: '2px'}}>
                                                    <img src={item.image.medium} style={{height:"500px",width:"400px"}} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5  style={{color:"green"}} className="card-title">Name: {item.name}</h5>
                                                        <p style={{color:"green"}} className="card-text">Rating: {item.rating.average}</p>
                                                        <p style={{color:"green"}} className="card-text">Language: {item.language}</p>
                                                        <p style={{color:"green"}} className="card-text">Genres: {item.genres[0]}</p>
                                                        <p style={{color:"green"}} className="card-text">Status: {item.status}</p>
                                                        <div>

                                                            <a href={'/series/' + item.id} className="btn" style={{color:" #f3ce13",border:"solid 1px"}}>Seasons</a>
                                                            <a href={item.url} target='_blank' className="btn" style={{color:" #f3ce13",border:"solid 1px",margin:"10px"}}>TVMAZE</a>

                                                        </div>

                                                        </div>
                                                </div>
                                            </div>





                                        )
                                    }
                                )
                            }

                    </div>
                </div>


        </div>
    );
}





            export default Series;