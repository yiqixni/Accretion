import { useState } from 'react';
import './user-auth.css';
// import AuthJWT from './AuthJWT.js';

export default function Login () {

    // console.log("is authenticated: ", AuthJWT());

    const [jwt, setJWT] = useState({
        "refresh": "",
        "access": ""
    });

    const [userData, setUserData] = useState({
        "username": "",
        "password": "",
    });

    const cleanUserData = () => {
        setUserData({
            "username": "",
            "password": "",
        });
    }

    // const [loginError, setLoginError] = useState({});
    
    const changeHandler = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        });
        
        console.log(event.target.value);
    }

    
    /* use try catch */
    const submitHandler = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(
                'http://127.0.0.1:8000/auth/jwt/create/', 
                {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                }
            )

            if (!response.ok) {
                throw new Error(await response.json());
            }

            if (response.ok) {
                const data = await response.json(); 
                localStorage.setItem('jwt', JSON.stringify(
                    {
                        "refresh": data.refresh, 
                        "access": data.access
                    }
                ));
                
                return true; 
            }
        } 
        catch (error) {
            console.log(error); 
            return false; 
        }
    }   

    return (
        <div>
            <form onSubmit={submitHandler}> 
                <div>
                    <label>Username</label>  
                    <input type="text" name="username" onChange={changeHandler} value={userData.username} />  
                </div>
                <div>
                    <label>Password</label>  
                    <input type="password" name="password" onChange={changeHandler} value={userData.password} />  
                </div>
                <button type="submit">Login</button>   
            </form>
        </div>
    )
}