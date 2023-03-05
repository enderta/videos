import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";

const MyAvailability = () => {
    const [myDate, setMyDates] = useState([]);
    const [edit, setEdit] = useState(false);
    const [date, setDate] = useState("");
    const [topic, setTopic] = useState("");



    useEffect(() => {
        fetch(`https://study-buddies.onrender.com/availability/${localStorage.getItem("id")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setMyDates(data);
            })
            .catch((err) => console.log(err));
    },[localStorage.getItem("av_id")]);
    console.log(myDate);
    const handleDelete = (id) => {
        fetch(`https://study-buddies.onrender.com/availability/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyDates(myDate.filter((date) => date.id !== id));
            })
            .catch((err) => console.log(err));
    }
    const handleEdit = (id) => {
        fetch(`https://study-buddies.onrender.com/availability/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                availability_date: date,
                topic: topic,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyDates(myDate.map((date) => date.id === id ? { ...date, availability_date: date, topic: topic } : date));
                setEdit(!edit);
            })
            .catch((err) => console.log(err));
    }


    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1>My Availability</h1>
            <div>
                <div>
                    <div className="container">
                        <div className="card-body">
                            <div className="row">
                                {myDate.map((date) => (
                                    <div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <strong>Date: </strong>
                                                    {new Date(date.availability_date).toLocaleDateString()}
                                                </p>
                                                <p className="card-text">
                                                    <strong>Topic: </strong>
                                                    {date.topic}
                                                </p>
                                                <Button className={"btn-outline-danger"} onClick={() => handleDelete(date.id)}>Delete</Button>
                                               {/* <Button className={"btn-outline-primary"} onClick={() => setEdit(!edit)}>Edit</Button>
                                                {edit && (
                                                    <div>
                                                        <input type="date" onChange={(e) => setDate(e.target.value)} />
                                                        <input type="text" onChange={(e) => setTopic(e.target.value)} />
                                                        <Button className={"btn-outline-primary"} onClick={() => handleEdit(date.id)}>Submit</Button>
                                                    </div>
                                                )}*/}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAvailability;