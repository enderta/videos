import React from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AddEmp = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [salary, setSalary] = React.useState(0);
    const [department, setDepartment] = React.useState(1);

    const handleChanges = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'salary') {
            setSalary(e.target.value);
        } else if (e.target.name === 'department') {
            if (e.target.value === 'Sales') {
                setDepartment(1)
            } else if (e.target.value === 'Marketing') {
                setDepartment(2)
            } else if (e.target.value === 'Engineering') {
                setDepartment(3)
            } else if (e.target.value === 'IT') {
                setDepartment(4)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/emps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                salary: salary,
                department: department
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div>
            <div className={'container'}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChanges}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChanges}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="Enter salary" name="salary" onChange={handleChanges}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <select name="department" onChange={handleChanges}>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Engineering">Engineering</option>
                            <option value="IT">IT</option>
                        </select>
                    </Form.Group>
                    <Button type="button" variant={"outline-success"}>Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddEmp;