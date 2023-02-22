import React from 'react';
import {Modal} from "react-bootstrap";

const Cars = (props) => {
    const [show, setShow] = React.useState(false);
    const [car, setCar] = React.useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    React.useEffect(() => {
        fetch(`http://localhost:3001/cars/owner/${props.id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                setCar(data);
            }
            );
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {
            })
        window.location.reload();
    }

    return (
        <div >
            <div className="container" >
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Car</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <table className="table table-info table-striped table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {car.map(car =>
                            <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td><button className="btn btn-outline-danger" onClick={() => handleDelete(car.id)}>Delete</button></td>
                        </tr>)}
                        </tbody>
                    </table>


                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-info" onClick={props.handleClose}>Close</button>
                </Modal.Footer>
            </Modal>


            </div>
        </div>
    );
};

export default Cars;