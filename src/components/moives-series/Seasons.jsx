import React from 'react';
import {useParams} from "react-router";
import './series.css'

const Seasons = (props) => {
    const [seasons, setSeasons] = React.useState([]);
    const [search, setSearch] = React.useState("");
    let params = useParams();

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${params.id}/episodes`)
            .then(response => response.json())
            .then(data => setSeasons(data.sort((a, b) => a.season - b.season)));
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    

    return (
        <body id='root'>
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
                            <a href="/series" className="nav-link px-2 text-white">
                                Series
                            </a>
                        </li>
                        <li>
                            <a href="/movies" className="nav-link px-2 text-white">
                                Movies
                            </a>
                        </li>
                    </ul>
                    <span>
                        <h4 className="text-white">Seasons</h4>
                         <select  className="form-select" aria-label="Default select example" onChange={handleChange}>
                    {seasons.map((season) => {
                            return (<option
                                value={season.name}>{`${season.name} - S${season.season
                                .toString()
                                .padStart(2, "0")}E${season.number.toString().padStart(2, "0")}`}</option>)
                        }
                    )}
                </select>
                    </span>

                </div>

            </div>


        </header>
        <div className="container">
            <div className="row">
                {
                    seasons.filter((season) => season.name.toLowerCase().includes(search.toLowerCase())).map((item) => {
                            return (
                                <div className="col-md-4" >
                                    <div className="card mb-4 shadow-sm" style={{background:"black",border:"#D43C31 solid",margin:'2px',padding:'2px'}}>
                                        <img src={item.image.medium} style={{"height":"500px",'weihgt':"200px"}} className="card-img-top" alt="..."/>
                                        <div className="card-body">

                                            <h5 style={{color: "green"}}
                                                className="card-title">Name: {item.name}</h5>
                                            <p style={{color: "green"}}
                                               className="card-text">Season: {item.season}</p>
                                            <p style={{color: "green"}}
                                               className="card-text">Number: {item.number}</p>
                                            <p style={{color: "green"}}
                                               className="card-text">Airdate: {item.airdate}</p>
                                            <p style={{color: "green"}}
                                               className="card-text">Runtime: {item.runtime}</p>

                                        </div>
                                        <div>
                                            <a href={item.url} target='_blank' className="btn" style={{color:" #f3ce13",border:"solid 1px",margin:"10px"}}>TVMAZE</a>
                                        </div>

                                    </div>

                                </div>
                            )
                        }
                    )
                }

            </div>
        </div>

        </body>


    )

};


export default Seasons;