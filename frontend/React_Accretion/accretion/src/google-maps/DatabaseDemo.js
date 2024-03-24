import { useState } from 'react';

import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';

export default function DatabaseDemo () {
    const [addressData, setAddressData] = useState(null); 

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
                    <DatabaseFetch addressData={addressData} />
                </div>
            )}                        
        </div>
    )
}