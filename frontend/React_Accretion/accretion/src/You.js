// import Logout from './user-auth/Logout';
import { useState } from 'react';

export default function You () {
    const [jwt, setJWT] = useState(JSON.parse(localStorage.getItem('jwt')));

    const logout = () => {
        console.log("logout start ", jwt); 
        const jwt_empty = {
            "refresh": "",
            "access": ""
        };
        localStorage.setItem('jwt', JSON.stringify(jwt_empty));
    }

    return (
        <form onSubmit={logout}>
            <button type="submit">
                Log out 
            </button>
        </form>
    );
}