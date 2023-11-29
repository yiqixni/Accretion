import React, {useState, useEffect} from "react";  

export default function SellerUpload() {
    
    const [propertyData, setPropertyData] = useState({
        "address": "",
        "description": "", 
        "pictures": "", 
        "asking_price": "", 
        "shares": ""
    });

    
    const submitHandler = async (event) => {
        event.preventDefault();
        
        // useEffect(() => {
        //     fetchItems();
        // }, []);
        const response = await fetch('http://127.0.0.1:8000/api/sell', 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(propertyData)
            }
        )

        console.log(response)
    }
    
    const changeHandler = (event) => {
        setPropertyData({
            ...propertyData, 
            [event.target.name]: event.target.value
        });
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}> 
                <div>
                    <label>Address</label>  
                    <input type="text" name="address" onChange={changeHandler} value={propertyData.address} />  
                </div>
                <div>
                    <label>Description</label>  
                    <input type="text" name="description" onChange={changeHandler} value={propertyData.description} />  
                </div>
                <div>
                    <label>Pictures</label>  
                    <input type="text" name="pictures" onChange={changeHandler} value={propertyData.pictures} />    
                </div>
                <div>
                    <label>Asking price</label>  
                    <input type="text" name="asking_price" onChange={changeHandler} value={propertyData.asking_price} />    
                </div>
                <div>
                    <label>Shares to sell</label>  
                    <input type="text" name="shares" onChange={changeHandler} value={propertyData.shares} />    
                </div>
                
                <button type="submit">Submit</button>   
            </form> 
        </div>
    )

}

