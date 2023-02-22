import React, { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider(props) {
    const [user, setUser] = useState({});

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:3001/trainees/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }).then(res => res.json())
                .then(data => {
                    setUser(data);
                })
        }
    }
        , [] );

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export const UserConsumer = UserContext.Consumer;