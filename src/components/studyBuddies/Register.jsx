import React from 'react';

const Register = () => {
    const [name, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [err, setErr] = React.useState(false);
    const handleChange = (e) => {
        if (e.target.name === 'firstName') {
            setFirstName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const register = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        }
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.token) {
                    alert('You are registered')
                    localStorage.setItem('token', data.token);
                    window.location.href = '/login';
                }
                else {
                    window.location.href = '/login';
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} placeholder="Enter first name" />
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} placeholder="Enter email" />
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange} placeholder="Password" />
                    <button type="submit" className="btn btn-outline-info" onClick={register}>Register</button>
                </div>
            </form>

        </div>
    );
};

export default Register;