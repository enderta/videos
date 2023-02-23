import React from 'react';

const LogOut = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = 'http://localhost:3000';
    }

    return (
        <div>
            <button onClick={handleLogout} className="btn btn-outline-info"
                    style={{float: "right", margin: "10px"}}>Logout</button>
        </div>
    );
};

export default LogOut;