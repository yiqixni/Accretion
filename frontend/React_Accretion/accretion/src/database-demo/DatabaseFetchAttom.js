import React, {useState, useEffect} from "react";  
import CreateDeedVisualAttomAPI from "./d3-attom-demo/CreateVisualAttomAPI";
import ContactUs from "../contact-us/ContactUs";
import Config from "../Config";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function DatabaseFetchAttom({ addressInfo, setFetchStatus }) {    
    
    const [dataATTOM, setDataATTOM] = useState(null); 
        
    const submitHandler = async (event) => {
        if (event) {
            event.preventDefault();
        }                
        try {
            const response = await fetch(
                "https://api.gateway.attomdata.com/propertyapi/v1.0.0/saleshistory/basichistory" + 
                `?address1=${addressInfo.street_number}%20${addressInfo.route}%20${addressInfo.unit}` + 
                `&address2=${addressInfo.locality}%20${addressInfo.state}%20${addressInfo.zipcode}`,
                {
                    method: "GET",                 
                    headers: {       
                        // apikey: '596d978f1497eafd93fd11d382c11525'          
                    },
                }
            );
    
            if (response.ok) {
                const data = await response.json();     
                setFetchStatus(true);
                setDataATTOM(data); 
            }
        }
        catch (error) {
            console.log(error);
            setFetchStatus(false);
        }
    }            
    
    // trigger submitHandler when the addressInfo change 
    useEffect( () => {
        submitHandler();
    }, [addressInfo])

    return (
        <div className="row">
            {dataATTOM && (
                <CreateDeedVisualAttomAPI dataJson={dataATTOM} visualWidth={600}/>
            )}
            
            {/* <div className="row">
                <div className="column">
                    <a href="https://buy.stripe.com/aEUg1IczadSldQQ8ww">
                        <Button id="button-database-demo" >
                            Single Search $1.99
                        </Button>
                    </a>
                </div>
                
                <div className="column">
                    <a href="https://buy.stripe.com/8wM02K8iU6pT2888wx">
                        <Button id="button-database-demo">
                            Membership $10.99
                        </Button>
                    </a>
                </div>                
            </div> */}

            {/* <div className="row">
                <div className="column">
                    <Link to="/contact-us">
                        <Button id="button-database-demo">
                            Contact Us To Get The Latest Update
                        </Button>
                    </Link>
                </div>                
            </div> */}
            
        </div>
    )
};

