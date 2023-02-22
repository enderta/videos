import React from 'react';
import {Modal} from "react-bootstrap";

const AddCars = (props) => {
    const [make, setMake] = React.useState('');
    const [model, setModel] = React.useState('');
    const [vin, setVin] = React.useState('');
    const [plate, setPlate] = React.useState('');
    const [owner_id, setOwner_id] = React.useState(props.id);
    const handleChange=(e)=>{
        if(e.target.name==='make'){
            setMake(e.target.value);
        }
        if(e.target.name==='model'){
            setModel(e.target.value);
        }
        if(e.target.name==='vin'){
            setVin(e.target.value);
        }
        if(e.target.name==='plate'){
            setPlate(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const car = {
            make,
            model,
            vin,
            plate,
            owner_id
        }
            fetch('http://localhost:3001/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(car)
            }).then(res => res.json())
                .then(data => {

                }
                )
                .catch(err => console.log(err))
            window.location.reload();
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}   >
                <Modal.Header closeButton>
                    <Modal.Title>Add Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="form-group">
                            <label htmlFor="make">Make</label>
                            <input type="text" className="form-control" id="make" name={'make'} value={make} onChange={handleChange}/>
                            <label htmlFor="model">Model</label>
                            <input type="text" className="form-control" id="model" name={'model'} value={model} onChange={handleChange}/>
                            <label htmlFor="vin">Vin</label>
                            <input type="text" className="form-control" id="vin" name={'vin'} value={vin} onChange={handleChange}/>
                            <label htmlFor="plate">Plate</label>
                            <input type="text" className="form-control" id="plate" name={'plate'} value={plate} onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddCars;