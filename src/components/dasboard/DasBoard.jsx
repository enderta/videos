import React, {useEffect, useState} from 'react';
import Gapi from "./Gapi";
import Study from "../graphics/Study";
import Sales from "../graphics/Sales";
import Deps from "../graphics/Deps";
import Budget from "../graphics/Budget";
import AddEmp from "./AddEmp";
import Button from "react-bootstrap/Button";
import Pagination from 'react-bootstrap/Pagination';

const DasBoard = () => {

    const [show, setShow] = React.useState(false);
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/emps?page=${currentPage}&search=${search}`)
            .then(response => response.json())
            .then(data => {
                setEmployees(data.data);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
            }
        );
    }, [currentPage, search]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSearch = (event) => {
        const { value } = event.target;
        setSearch(value);
        setCurrentPage(1);
    };

    return (
        <div >
            <header id='root' style={{margin: '10px'}}>
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                               <Button variant="outline-info" onClick={handleShow}>
                                   Add
                                 </Button>
                                        <AddEmp show={show} onHide={handleClose}/>
                            </li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search Employees..."
                                aria-label="Search"
                                onChange={handleSearch}
                            />
                        </form>
                    </div>
                </div>
            </header>
            <div className="container" >
                <table className="table" style={{color:'darkolivegreen' ,margin:'10px'}}>
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Salary</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.salary}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
             <Pagination >
                <Pagination.First style={{color:'yellow'}} onClick={()=>{setCurrentPage(1)}} />
                <Pagination.Prev onClick={()=>{setCurrentPage(currentPage-1)}} />
                <Pagination.Item>{currentPage}</Pagination.Item>
                <Pagination.Next onClick={()=>{setCurrentPage(currentPage+1)}} />
                <Pagination.Last onClick={()=>{setCurrentPage(totalPages)}} />
            </Pagination>

            </div>
            <div className="container" >
                <div className="row" >
                    <div className="col-6">
                        <Study/>
                    </div>
                    <div className="col-6">
                        <Sales/>
                    </div>
                    <div className="col-6">
                        <Deps/>
                    </div>
                    <div className="col-6">
                        <Budget/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DasBoard;