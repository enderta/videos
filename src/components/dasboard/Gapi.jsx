import React, { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
const Gapi = () => {
  //use gapi to sing in  with google
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: '853423295590-igmnae66okticiqm6hrkuharkng0kdjl.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/calendar'
            });
        }

        gapi.load('client:auth2', start);
    }, [])
    const onSignIn = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }


    return (
        <div>
            <div id="google-sign-in" className="g-signin2" data-onsuccess="onSignIn"></div>
            {isSignedIn && (
                <div>
                    <h1>{user.getName()}</h1>
                </div>
            )}

        </div>
    );
};
export default Gapi;