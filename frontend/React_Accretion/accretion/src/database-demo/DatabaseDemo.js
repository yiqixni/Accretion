import { useState } from 'react';
import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';
import DatabaseFetchAttom from './DatabaseFetchAttom.js';
// import CheckoutFormStripe from '../payment-stripe/CheckoutFormStripe.js';
// import DatabaseVisualization from './DatabaseVisualization.js';
// import DemoDellSt from './DemoDellSt.js';
// import CreateDeedVisual from './d3-demo/CreateDeedVisual.js';
import CreateDeedVisualAttom from './d3-attom-demo/CreateVisualAttom.js';
// import Button from 'react-bootstrap/Button';
import ContactUs from '../contact-us/ContactUs.js';


export default function DatabaseDemo () {

    const [fetchStatus, setFetchStatus] = useState(null); 
    const [addressInfo, setAddressInfo] = useState(null);
    
    const updateAddressInfo = (data) => {
        setAddressInfo(data);
    } 

   

    return (
        <div className='database-demo'>
            <div className='row'> 
                <div id='title'> Accretion Database Demo </div>
            </div>  

            <div className='row'>
                <div id='small-title'>All Deed Records in One Place</div>
            </div>
            
            <div className='row'>                
                <div className='text' style={{textAlign:"center"}}>
                    Your Next Title Search Starts Here: 
                </div>                                                                                                
            </div>

            <div className='row'>                
                <MapAutocomplete updateAddressInfo={updateAddressInfo} id='search-bar'/>                                                
            </div>

            {addressInfo && (                   
                <div> 
                    {console.log(addressInfo)}
                    <div className='row'>
                        <DatabaseFetchAttom addressInfo={addressInfo} setFetchStatus={setFetchStatus} />
                    </div>                                       

                    <div className='row'> 
                        <div className='text'> 
                            We are in the process building the best database for deeds and titles.
                            <br/> 
                            To perfect our database, 
                            we are working with local county registry, 
                            real estate attorneys, 
                            title companies. 
                            <br/>
                            Contact us to learn more. 
                        </div>
                        <div>
                            <ContactUs />
                        </div>
                    </div>
                    
                    
                </div>
            )}       

                      

            {/* <div className='row'>
                <div id='small-title'> 
                    The Best in Class Visualization Tool for Title Abstraction 
                </div> 
            </div>            
            <div className='row'>    

                <div className='text'>
                    Experience the title abstract visual for the property located in 22 Dell St. Somerville, MA. 
                    <br/>
                    Just click on the visual to inspect the title abstract detail. 
                    <br/>
                    Power by the best visualization tool from Accretion,                         
                    you can effortlessly inteprete the title abstract.                                                                                                                         
                </div>                    
                
            </div>
            

            <div className='row'>                
                <CreateDeedVisualAttom visualWidth={600} />
            </div>                         */}
                                                                                        
        </div>
    )
}