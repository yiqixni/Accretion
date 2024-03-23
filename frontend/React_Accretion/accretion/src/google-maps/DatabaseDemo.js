import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetch from './DatabaseFetch.js';

export default function DatabaseDemo () {
    return (
        <div className='database-demo'>
            <div id='title'> Accretion Database </div>
            <div>
                <MapAutocomplete />
            </div>
            <div>
                <DatabaseFetch />
            </div>
        </div>
    )
}