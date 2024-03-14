import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';

import Statement_database from './Statement_database.js';
import Statement_marketplace from './Mission_animation_marketplace.js';
import './Home.css'
import AccretionDatabase from './AccretionDatabase.jsx';
import AccretionMarketplace from './AccretionMarketplace.jsx';

export default function Home () {
    return (
        <div className='home'>

            <Helmet>
                <title>Accretion | Reduce Frictions in Housing Market</title>
            </Helmet>

            <div className='segment'>
                <div className='segment-title'>
                    Accretion Database
                </div>

                <div className='three-column-container'>
                    <div className='column-2'>
                        <div id='mission-statement-title-database'>
                            Building a modern real estate database for 
                        </div>
                        <Statement_database/>
                        <div id='mission-statement-text'>
                        You don't need to go around places to search for records. 
                        Accretion database is a centralized record system for real estate deeds and titles, 
                        </div>
                        <div id='mission-statement-text-highlight'>within reach from anywhere,</div>
                        <div id='mission-statement-text-highlight'>within seconds. </div>
                    </div>
                    <div className='column'>
                        <AccretionDatabase id="logo"/>
                    </div>
                </div>

                <div className='three-column-container'>
                    <div className='column-2'>
                        <Button variant='outline-primary' id='learn-more-button'> 
                            Learn more
                        </Button>
                        <Button variant='outline-primary' id='contact-us-button'> 
                            Contact us
                        </Button>
                    </div>
                    
                    <div className='column'></div>
                </div>
            </div>

            <div className='segment'>
                <div className='segment-title'>
                    Accretion Marketplace
                </div>

                <div className='three-column-container'>
                    <div className='column-2'>
                        <div id='mission-statement-title-marketplace'>
                            A totally transparent marketplace for housing market investment from
                        </div>
                        <Statement_marketplace/>
                        <div id='mission-statement-text'>
                        Buy and sell real estates in one place, 
                        </div>
                        <div id='mission-statement-text-highlight'>with a clear financial statistics,</div>
                        <div id='mission-statement-text-highlight'>with a transparent bidding process,</div>
                        <div id='mission-statement-text-highlight'>with click of a button to become a homeowner. </div>
                    </div>
                    <div className='column'>
                        <AccretionMarketplace id="logo"/>
                    </div>
                </div>

                <div className='three-column-container'>
                    <div className='column-2'>
                        <Button variant='outline-primary' id='learn-more-button'> 
                            Learn more
                        </Button>
                        <Button variant='outline-primary' id='contact-us-button'> 
                            Contact us
                        </Button>
                    </div>
                    
                    <div className='column'></div>
                </div>
            </div>

        </div>
    )
}