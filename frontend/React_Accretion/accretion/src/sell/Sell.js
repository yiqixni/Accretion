import SellerUpload from './SellerUpload'; 
import SellerView from './SellerView'; 
import {useAuth} from '../user-auth/AuthContext'; 

export default function Sell () {
    const { isLoggedIn } = useAuth(); 

    return (
        <div>
            {isLoggedIn ? 
                <div>
                    <SellerView/>
                    <SellerUpload/>
                </div> :
                <div>
                    <h3>Please login or signup first</h3>
                </div>
            }
        </div>
    )
}