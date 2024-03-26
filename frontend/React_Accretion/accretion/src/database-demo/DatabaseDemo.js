import { useState } from 'react';

import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';
import DatabaseVisualization from './DatabaseVisualization.js';

// D3 example
import treeBoxes from './d3-example/tree-boxes.js';

export default function DatabaseDemo () {
    const [addressData, setAddressData] = useState(null); 
    const [deedRecords, setDeedRecords] = useState(null); 

    const handleAddressData = (data) => {
        setAddressData(data); 
    }

    return (
        <div className='database-demo'>
            <div id='title'> Accretion Database </div>
            <div>
                <MapAutocomplete onAddressData={handleAddressData}/>
            </div>
            {addressData && (
                <div>
                    <DatabaseFetch addressData={addressData} setDeedRecords={setDeedRecords} />
                </div>
            )}
            {deedRecords && (
                <div> 
                    <DatabaseVisualization data={deedRecords} />
                </div>
            )}
            <treeBoxes/>                        
        </div>
    )
}