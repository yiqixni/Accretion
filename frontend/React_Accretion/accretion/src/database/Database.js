import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';

import './Database.css';

// import CountyMap from './US_county_map.jsx';
import CountyMap from './Usa_counties_large.png';
import Visualization from './database-abstract-of-title-visualization.svg';
import Service from './database-services.svg';


export default function Database () {
    return (
        <div>
            <Helmet>
                <title>Database | Centralized Property Data In One Place</title>
            </Helmet>

            <div className='two-column-container'>
                <div className='small-title'>Accretion</div>
            </div>

            <div className='two-column-container'>
                <div className='headline-title'>
                    <span id='highlight'>Database. </span> 
                    Find real estate titles and deeds cross the country all in one place. 
                </div>
            </div>

            <div className='two-column-container'>
                <div className='column'> 
                    <div id='title'>All data in one place. </div> 
                    Combining deeds and titles that are scattered from more than 3,000 counties into one. 
                    Finish your title search task within seconds. 
                    <div className='button'>
                        <Button id='learn-more-button'>Contact Us to Learn More</Button>
                    </div>
                </div>

                <div className='column'>
                    <img src={CountyMap} id='pic'/>
                </div>
            </div>

            <div className='two-column-container'>
                <div className='column'>
                    <img src={Visualization} id='pic'/>
                </div>

                <div className='column'> 
                    <div id='title'>Clear visualization. </div> 
                    Trace all the deeds history with a clear graphic. 
                    Invest in real estate with confidence. 
                    We aim to reduce the closing process time to be faster than public stock trades.  
                    <div className='button'>
                        <Button id='learn-more-button'>Contact Us to Learn More</Button>
                    </div>
                </div>
            </div>

            <div className='two-column-container'>
                <div className='column'> 
                    <div id='title'>Service to real estate experts. </div> 
                    Accretion database is built to service real estate experts  
                    attorneys
                    title companies
                    title insurers 
                    <div className='button'>
                        <Button id='learn-more-button'>Contact Us to Learn More</Button>
                    </div>
                    
                </div>

                <div className='column'>
                <img src={Service} id='pic'/>
                </div>
            </div>

            <div className='two-column-container'>
                <div className='headline-title'>
                    We are dedicated to make 
                    <span id='highlight'> EVERONE </span> 
                    real estate investment experts by providing the most comprehensive data. 
                </div>
            </div>

            <div className='button'>
                <Button id='learn-more-button'>Contact Us to Learn More</Button>
            </div>

        </div>
    )
}