import React from 'react';
import { UserConsumer } from './UserContext';

function UserProfile() {
    return (
        <UserConsumer>
            {({ user }) => (
                <div>
                    <h1>Hello, {user.name}!</h1>
                    <p>Your email address is {user.email}</p>
                </div>
            )}
        </UserConsumer>
    );
}

export default UserProfile;