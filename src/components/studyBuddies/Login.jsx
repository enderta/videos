import React from 'react';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [err, setErr] = React.useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const login = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.token) {

                    localStorage.setItem('token', data.token);
                    localStorage.setItem('email', email);
                    localStorage.setItem('id', data.id);
                    window.location.href = '/home';
                } else {
                    alert('Wrong email or password')
                    setErr(true);
                }
            })
            .catch(err => console.log(err))
    }
    console.log(localStorage)
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleEmail} placeholder="Enter email" />
                    <input type="password" className="form-control" id="password" name="password" onChange={handlePassword} placeholder="Password" />
                    <button type="submit" className="btn btn-outline-info" onClick={login}>Login</button>
                </div>

            </form>
        </div>
    );
};

export default Login;