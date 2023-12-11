
export default async function RefreshJWTaccess (refresh_token) { 
    try {
        const response = await fetch(
            "http://localhost:8000/auth/jwt/refresh/", 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: `{"refresh": "${refresh_token}"}`
            }
        );

        if (response.ok) {
            const data = await response.json(); 
            // save access and refresh token to local storage
            localStorage.setItem('jwt', JSON.stringify({
                "access": data.access, 
                "refresh": refresh_token
            }));
            console.log("JWT access token is refreshed"); 
            return true;
        }

        if (!response.ok) {
            throw new Error(await response.json());
        }
    }
    catch (error) {
        console.log("JWT token refresh encountered an error");
        console.log(error); 

        return false; 
    }
}