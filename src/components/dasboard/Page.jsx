import React, {useEffect, useState} from 'react';
import { Table, Pagination } from 'react-bootstrap';
const Page = () => {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch(`http://localhost:3001/emps?page=${currentPage}`);
            const { data, currentPage, totalPages } = await response.json();
            setEmployees(data);
            setCurrentPage(currentPage);
            setTotalPages(totalPages);
        };

        fetchEmployees().then(r => console.log(r));
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
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
            </div>
          <div>
              <Pagination
                  className="justify-content-center"
                  size="lg"
                  activePage={currentPage}
                  itemsCountPerPage={10}
                  totalItemsCount={totalPages * 10}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
              />

          </div>

        </div>
    );
};

export default Page;