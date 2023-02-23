import React from 'react';

const CreateAvailibity = () => {
    const [date, setDate] = React.useState(new Date());
    const [topic, setTopic] = React.useState('');
    let id = localStorage.getItem('id')
    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'date') {
            setDate(new Date(value));
        } else if (name === 'topic') {
            setTopic(value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
        const available = {
            availability_date: formattedDate,
            topic: topic,
            trainees_id: id
        }
        fetch('http://localhost:3001/availability', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(available)
        }).then(res => res.json())
            .then(data => {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        alert('You have created a new available date!');
                        window.location.href = '/home';
                    }
                }
            )
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" name="date" onChange={handleChange}
                           placeholder="Enter date"/>
                    <label htmlFor="topic">Topic</label>
                    <input type="text" className="form-control" id="topic" name="topic" onChange={handleChange}
                           placeholder="Enter topic"/>
                    <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAvailibity;