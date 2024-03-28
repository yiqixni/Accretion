import { useState } from 'react';

import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';
import DatabaseVisualization from './DatabaseVisualization.js';
import CreateDeedVisual from './d3-demo/CreateDeedVisual.js';

// import { Box } from './d3-demo/d3-elements.js';

// D3 example
// import treeBoxes from './d3-example/tree-boxes.js';

//D3 demo: learn D3 by building a simple tree boxes for deed records
// import DatabaseVisualizationD3 from './d3-demo/DatabaseVisualizationD3.js';

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
            
            {/* <DatabaseVisualizationD3 /> */}
            <CreateDeedVisual />
        </div>
    )
}