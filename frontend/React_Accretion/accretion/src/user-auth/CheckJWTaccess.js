
export default async function CheckJWTaccess (access_token) { 
    try {
        const response = await fetch(
            "http://localhost:8000/auth/users/", 
            {
                method: 'GET', 
                headers: {
                    'Authorization': `JWT ${access_token}`,
                    'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log("JWT access token is valid");

            return true; 
        }

        if (!response.ok) {
            throw new Error(response.json());
        }
    }
    catch (error) {
        console.log("JWT access token is invalid");
        console.log(error); 

        return false; 
    }
}