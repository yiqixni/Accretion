import { useState } from 'react';
import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';
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
            <div className='container'> 
                <div id='title'> Accretion Database Demo </div>
            </div>
            
            <div className='container'>
                <div id='small-title'> 
                    The Best Visualization for Title Abstraction 
                </div> 
            </div>            
            <div className='container'>
                <div className='column1'>
                    <div className='text'>
                        Just click on the visual to inspect the title abstract detail. 
                        <br/>
                        Power by the best visualization tool from Accretion,                         
                        you can effortlessly inteprete the title abstract.                                                                                                                         
                    </div>
                    {/* <div >                            
                        <Button id='button-show-demo'>
                            Show Demo 1
                        </Button>                                     
                    </div>
                    <div >                            
                        <Button id='button-show-demo'>
                            Show Demo 2
                        </Button>                                     
                    </div>                     */}
                </div>
            </div>
            <div className='container'>                
                <div className='column1'>
                    <div>22 Dell St. Somerville MA. 02145</div>
                    <div style={{height: "20px"}}/>
                    <CreateDeedVisual visualWidth={600} />
                </div>            
            </div>
            
            <div style={{height: '100px'}}/>

            <div className='container'>
                <div id='small-title'>All Deed Records in One Place</div>
            </div>
            <div className='container'>
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
                <div className='column2'>                                                           
                    <MapAutocomplete onAddressData={handleAddressData}/>
                </div>               
            </div>
            <div>
                
            </div>
            {addressData && (
                <div>
                    <DatabaseFetch addressData={addressData} setDeedRecords={setDeedRecords} />
                </div>
            )}                                                               
            <div>
                <ContactUs />
            </div>
        </div>
    )
}