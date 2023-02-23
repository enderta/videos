import React, {useEffect, useState} from 'react';
import AvailibityTable from "./AvailibityTable";
import {Link} from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import LogOut from "./LogOut";

const Availibites = (props) => {

    const [owners, setOwners] = React.useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('daily');

    React.useEffect(() => {
        fetch(`http://localhost:3001/availabilities?page=${currentPage}&search=${search}&filter=${filter}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(data => {
                setOwners(data.data);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
            });
    }, [currentPage, search, filter]);

    const handleSearch = (event) => {
        const {value} = event.target;
        setSearch(value);
        setCurrentPage(1);
    };

    function handleDailyFilter() {
        setFilter('daily');
    }

    function handleWeeklyFilter() {
        setFilter('weekly');
    }

    function handleMonthlyFilter() {
        setFilter('monthly');
    }

    return (
        <div>
            <h1 style={{color: "yellow", textAlign: "center"}}>List of Trainees</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Search" value={search}
                               onChange={handleSearch}/>
                    </div>
                       <div className="col-md-6">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-info" onClick={handleDailyFilter}>Daily</button>
                            <button type="button" className="btn btn-outline-info" onClick={handleWeeklyFilter}>Weekly</button>
                            <button type="button" className="btn btn-outline-info" onClick={handleMonthlyFilter}>Monthly</button>
                        </div>
                       </div>
                </div>
            </div>
            <div>
                  <span>
               <div className="col-md-6">
                    <div className="btn-group" role="group" aria-label="Basic example">
                 <LogOut/>
                      <button className="btn btn-outline-info" style={{float: "right", margin: "10px"}}>
                            <Link to='/availability' style={{textDecoration:"none"}}  >Add Availability</Link>
                      </button>
                    </div>
               </div>
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
                        <AvailibityTable key={owner.id} owner={owner} owners={owners} setOwners={setOwners}/>)
                    }
                    <Pagination className={'pagination'}>
                        <Pagination.First onClick={() => {
                            setCurrentPage(1)
                        }}
                                          disabled={
                                              currentPage === 1
                                          }/>
                        <Pagination.Prev onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}
                                         disabled={
                                             currentPage === 1
                                         }/>
                        <Pagination.Item>{currentPage}</Pagination.Item>
                        <Pagination.Next onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}
                                         disabled={
                                             currentPage === totalPages
                                         }/>
                        <Pagination.Last onClick={() => {
                            setCurrentPage(totalPages)
                        }}
                                         disabled={
                                             currentPage === totalPages
                                         }/>
                    </Pagination>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Availibites;