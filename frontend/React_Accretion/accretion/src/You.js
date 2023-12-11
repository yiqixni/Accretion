import { useAuth } from './user-auth/AuthContext';

export default function You () {
    const { isLoggedIn, logout } = useAuth(); 

    const jwt = JSON.parse(localStorage.getItem('jwt'));

    const emptyJWT_logout = () => {
        console.log("logout start ", jwt); 
        const jwt_empty = {
            "refresh": "",
            "access": ""
        };
        localStorage.setItem('jwt', JSON.stringify(jwt_empty));
        logout(); 
    }

    return (
        <div>
        {isLoggedIn ? 
            <form onSubmit={emptyJWT_logout}>
                <h2>Welcome to Accretion</h2>
                <button type="submit">
                    Log out 
                </button>
            </form> :
            <h2>
                Please login or sign up. 
            </h2>
        }
        </div>
    );
}