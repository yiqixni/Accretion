import { useState } from 'react';
import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';
import CheckoutFormStripe from '../payment-stripe/CheckoutFormStripe.js';
// import DatabaseVisualization from './DatabaseVisualization.js';
// import DemoDellSt from './DemoDellSt.js';
import CreateDeedVisual from './d3-demo/CreateDeedVisual.js';
// import Button from 'react-bootstrap/Button';
import ContactUs from '../contact-us/ContactUs.js';


export default function DatabaseDemo () {
    const [addressData, setAddressData] = useState(null); 
    const [deedRecords, setDeedRecords] = useState(null); 

    const handleAddressData = (data) => {
        setAddressData(data); 
    }    

    return (
        <div className='database-demo'>
            <div className='row'> 
                <div id='title'> Accretion Database Demo </div>
            </div>            

            <div className='row'>
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
                <CreateDeedVisual visualWidth={600} />
            </div>                        

            <div className='row'>
                <div id='small-title'>All Deed Records in One Place</div>
            </div>
            
            <div className='row'>
                <div className='text'>
                    All the data in one place. 
                    <br/>
                    We are in the process building the best database for deeds and titles.
                    <br/> 
                    To perfect our database, 
                    we are working with local county registry, 
                    real estate attorneys, 
                    title companies. 
                </div>
                <div className='text'>
                    So, Your Next Title Search Will Start Here: 
                </div>                                                                                                
            </div>

            <div className='row'>                
                <MapAutocomplete onAddressData={handleAddressData} id='search-bar'/>                                                
            </div>

            {addressData && (
                <div> 
                    <div className='row'>
                        <DatabaseFetch addressData={addressData} setDeedRecords={setDeedRecords} />
                    </div>
                    
                    <div>
                        <ContactUs />
                    </div>
                </div>
            )}                                                               
            
        </div>
    )
}