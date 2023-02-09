import React, {useEffect, useState} from 'react';

const DasBoard = () => {
    const [employees, setEmployees] = useState([]);
    const [filtered, setFiltered] = useState(employees);

    useEffect(()=>{
        fetch('http://localhost:3001/emps')
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                setFiltered(data);
            });

    }, []);

    const handleChange = (event) => {
        if(event.target.value === ''){
            setFiltered(employees);
        }else{
            setFiltered(employees.filter((employee) => employee.name.toLowerCase().includes(event.target.value.toLowerCase())));
        }
    }

    return (
        <div>
            <header id='root' style={{margin: '10px'}}>
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search..."
                                aria-label="Search"
                                onChange={handleChange}
                            />
                        </form>
                        <button className="btn btn-outline-light me-2">Add</button>
                    </div>
                </div>
            </header>
            <div className="container">
               <table className="table" style={{color:'darkolivegreen',fontSize:'20px'}}>
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
        </div>

    );
};

export default DasBoard;