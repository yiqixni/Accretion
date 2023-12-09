import {useState, useEffect} from 'react';

export default async function AuthJWT() {
    const [jwt, setJWT] = useState(JSON.parse(localStorage.getItem('jwt')));

    const checkJWTaccess = async (token) => { 
        try {
            const response = await fetch(
                "http://localhost:8000/auth/users/", 
                {
                    method: 'GET', 
                    headers: {
                        'Authorization': `JWT ${token}`,
                        'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                console.log("JWT access token is valid");

                return true; 
            }

            if (!response.ok) {
                throw new Error(response.JSON());
            }
        }
        catch (error) {
            console.log("JWT access token is invalid");
            console.log(error); 

            return false; 
        }
    }

    const checkJWTrefresh = async (token) => {
        try{
            const response = await fetch(
                "localhost:8000/auth/jwt/refresh/",
                {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(token) 
                }
            )
            
            if (response.ok) {
                // update the JWT access token in local storage
                setJWT((prevJWT) => ({ 
                    ...prevJWT, 
                    "access": response.access
                }));
                localStorage.setItem('jwt', JSON.stringify(jwt));
    
                return true; 
            }

            if (!response.ok) {
                throw new Error(response.JSON());
            }
            
        } 
        catch (error){
            console.log("JWT refresh token is invalid, login again");
            console.log(error); 

            return false; 
        }
    }

    if (jwt) { 
        /* use try catch for async function */
        // useEffect(() => {
        //     console.log("JWT found in local storage");

        //     const isAccessValid = checkJWTaccess(jwt.access);
        //     if (!isAccessValid) {
        //         const isRefreshValid = checkJWTrefresh(jwt.refresh);
        //         if (!isRefreshValid) {
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     }
        // },[]);

        /* use then chain */
        useEffect(() => {
            console.log("JWT found in local storage");
            checkJWTaccess(jwt.access)
            .then((isAccessValid) => {
                if (isAccessValid) {
                    return true;
                }
                if (!isAccessValid) {
                    checkJWTrefresh(jwt.refresh)
                    .then((isRefreshValid) => {
                        if (!isRefreshValid) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                }
            })
        },[]);

    } else {
        console.log("JWT not found in local storage");

        return false;
    }
}