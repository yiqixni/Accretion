/* 
SellerView get seller uploaded property an owner view 
*/

import { useEffect, useState } from 'react'; 
import './PropertyView.css'

export default function SellerView () {
    const [propertyData, setPropertyData] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt")); 
    
    useEffect(() => {
        const getSellerProperty = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/sell/", 
                    {
                        method: "GET", 
                        headers: {
                            "Authorization": `JWT ${jwt.access}` 
                        }
                    }
                )
                const data = await response.json(); 
                setPropertyData(data); 
            } 
            catch (error) {
                console.log(error)
            }
        }

        getSellerProperty(); 

        

    },[])
    

    return (
        <div>
            <h3>Your properties</h3>
            <div className="property-grid">
                {
                    propertyData.map((propertyInfo, index)=>(
                        <div className="property-card" key={index}>
                           <img src={propertyInfo.images[0].image}/>
                           <p>Address: {propertyInfo.address}</p>
                           <p>Asking price: {propertyInfo.asking_price}</p>
                           <p>Shares for sale: {propertyInfo.shares}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}