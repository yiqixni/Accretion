import React, {useState, useEffect} from "react";  
import ContactUs from "../contact-us/ContactUs";
import Config from "../Config";

export default function DatabaseFetch({ addressData, setDeedRecords }) {    
    let addressInfo = {
        streetNumber: '',
        streetName: '',
        city: '',
        county: '',
        state: ''
    };

    addressData.address_components.forEach(component => {
        if (component.types.includes('street_number')) {
            addressInfo.streetNumber = component.long_name;
        } else if (component.types.includes('route')) {
            addressInfo.streetName = component.long_name;
        } else if (component.types.includes('locality')) {
            addressInfo.city = component.long_name;
        } else if (component.types.includes('administrative_area_level_2')) {
            addressInfo.county = component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
            addressInfo.state = component.long_name;
        }
    });
        
    const submitHandler = async (event) => {
        if (event) {
            event.preventDefault();
        }                
        try {
            const response = await fetch(
                Config.API_URL_forDev + 
                "api/database/" + 
                `?state=${addressInfo.state}&?county=${addressInfo.county}&?town=${addressInfo.city}&?street_name=${addressInfo.streetName}&?stree_number=${addressInfo.streetNumber}`, 
                {
                    method: "GET",                 
                    headers: {                 
                    },
                }
            );
    
            if (response.ok) {
                const data = await response.json(); 
                console.log(data);
                setDeedRecords(data); 
            }
        }
        catch (error) {
            console.log(error);
        }
    }            
    
    // trigger submitHandler when the addressData change 
    useEffect( () => {
        submitHandler();
    }, [addressData])

    return (
        <div className="upload-form">
            {addressInfo.state!="Massachusetts" && (
                <div>
                    <p>We are rolling out service to {addressInfo.state}!</p>
                    <p>Please contact us to get the latest update!</p>
                    <ContactUs />
                </div>
            )}
            {addressInfo.state=="Massachusetts" && (
                <div>
                    <p>We are currently building service to {addressInfo.state} as fast as we can!</p>
                    <p>Please contact us to learn more</p>
                    <ContactUs />
                </div>                
            )}            
        </div>
    )
};

