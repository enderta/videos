import React from 'react';
import Form from "react-bootstrap/Form";

const AddVideo = (props) => {
    const [id, setId] = React.useState(0);
    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [rating, setRating] = React.useState(0);
    const handleChanges = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else if (e.target.name === 'url') {
            setUrl(e.target.value);
        } else if (e.target.name === 'rating') {
            setRating(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setId(id + 1);
        const newVideo = {
            id: id,
            title: title,
            url: url,
            rating: rating
        }
       props.data([...props.videos, newVideo]);
        setTitle('');
        setUrl('');
        setRating(0);

    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={title} onChange={handleChanges}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Url</Form.Label>
                    <Form.Control type="text" placeholder="Enter url" name="url" value={url} onChange={handleChanges}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" placeholder="Enter rating" name="rating" value={rating} onChange={handleChanges}/>
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>

        </div>
    );
};

export default AddVideo;