import React from 'react';
import Owner from "./Owner";
import {Link} from "react-router-dom";

const Owners = (props) => {

    const [owners, setOwners] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/availabilities',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }

            })
            .then(response => response.json())
            .then(data => {
                    setOwners(data);
                }
            );
    }, []);
    console.log(localStorage)
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = 'http://localhost:3000';
    }

    return (
        <div>
            <h1 style={{color: "yellow", textAlign: "center"}}>List of Trainees</h1>
            <div>
                  <span>
                <button onClick={handleLogout} className="btn btn-outline-info"
                        style={{float: "right", margin: "10px"}}>Logout</button>
                      <button className="btn btn-outline-info">
                         <Link to='/availability' style={{float: "left", margin: "10px",textDecoration:'none'}}>Add Availability</Link>
                      </button>
            </span>
            </div>
            <div className="container">
                <table
                    className="table table-responsive table-dark table-borderless table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Availability Date</th>
                        <th scope="col">Topics</th>
                    </tr>
                    </thead>
                    <tbody>
                    {owners.map(owner =>
                        <Owner key={owner.id} owner={owner} owners={owners} setOwners={setOwners}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Owners;