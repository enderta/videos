import React from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AddEmp = (props) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [salary, setSalary] = React.useState(0);
    const [department_id, setDepartment_id] = React.useState("1");

    const handleChanges = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'salary') {
            setSalary(e.target.value);
        }
    }
    const handleSelect = (e) => {
        if (e.target.value === '1') {
            setDepartment_id("1");
        } else if (e.target.value === '2') {
            setDepartment_id("2");
        } else if (e.target.value === '3') {
            setDepartment_id("3");
        } else if (e.target.value === '4') {
            setDepartment_id("4");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmp = {
            name,
            email,
            salary,
            department_id
        }
        fetch('http://localhost:3001/emps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmp)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        window.location.reload();
    }

    return (
        <div>
            <div className={'container'}>
                <Modal show={props.show} onHide={props.onHide}   >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name={'name'} value={name}
                                                onChange={handleChanges}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name={'email'} value={email}
                                                onChange={handleChanges}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" placeholder="Enter salary" name={'salary'} value={salary}
                                                onChange={handleChanges}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Department</Form.Label>
                               <select name="cars" onChange={handleSelect}>
                                      <option value='1' name={'Sales'}>Sales</option>
                                        <option value="2" name={'Marketing'}>Marketing</option>
                                        <option value="3" name={'Engineering'}>Engineering</option>
                                        <option value="4" name={'IT'}>IT</option>
                                </select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default AddEmp;