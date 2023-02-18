import React, {useEffect, useState} from 'react';
import Gapi from "./Gapi";
import Study from "../graphics/Study";
import Sales from "../graphics/Sales";
import Deps from "../graphics/Deps";
import Budget from "../graphics/Budget";
import AddEmp from "./AddEmp";
import Button from "react-bootstrap/Button";

const DasBoard = () => {
    const [employees, setEmployees] = useState([]);
    const [filtered, setFiltered] = useState(employees);
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(()=>{
        fetch('http://localhost:3001/emps')
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                setFiltered(data);
            });
    }, []);
    console.log(employees)
    const handleChange = (event) => {
        if(event.target.value === ''){
            setFiltered(employees);
        }else{
            setFiltered(employees.filter((employee) => {
                return (
                    employee.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    employee.department.toLowerCase().includes(event.target.value.toLowerCase())
                );
            }));
        }
    };


    return (
        <div>
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
                                placeholder="Search..."
                                aria-label="Search"
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                </div>
            </header>
            <div className="container">
               <table className="table" style={{color:'darkolivegreen',fontSize:'20px' ,margin:'10px'}}>
                     <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filtered.map((employee, index) => {
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
            </div>
            <div className="container">
                <div className="row">
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