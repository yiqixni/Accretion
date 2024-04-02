import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Statement_database from './Statement_database.js';
import Statement_marketplace from './Statement_marketplace.js';
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

                <div className='row'>
                    <div className='column-2'>
                        <div id='mission-statement-title-database'>
                            Building a modern real estate database for 
                        </div>
                        <Statement_database/>
                        <div id='mission-statement-text'>
                        You no longer need to visit multiple locations to search for records. 
                        Accretion's database is a centralized record system for real estate deeds and titles,             
                        </div>
                        <div id='mission-statement-text-highlight'>accessible from anywhere,</div>
                        <div id='mission-statement-text-highlight'>within seconds. </div>
                    </div>
                    <div className='column'>
                        <Link to='/database'>
                            <AccretionDatabase id="logo"/>
                        </Link>                        
                    </div>
                </div>

                <div className='row'>
                    <div className='column-2'>
                        <Link to='/database'>
                            <Button variant='outline-primary' id='learn-more-button'> 
                                Learn more
                            </Button>
                        </Link>
                        
                        <Link to='contact-us'>
                            <Button variant='outline-primary' id='contact-us-button'> 
                                Contact us
                            </Button>
                        </Link>
                        
                    </div>
                    
                    <div className='column'></div>
                </div>
            </div>

            <div className='segment'>
                <div className='segment-title'>
                    Accretion Marketplace
                </div>

                <div className='row'>
                    <div className='column-2'>
                        <div id='mission-statement-title-marketplace'>
                            A totally transparent marketplace for housing market investments from
                        </div>
                        <Statement_marketplace/>
                        <div id='mission-statement-text'>
                        Buy and sell real estate properties in one place with 
                        </div>
                        <div id='mission-statement-text-highlight'> a clear financial statistics,</div>
                        <div id='mission-statement-text-highlight'> a transparent bidding process,</div>
                        <div id='mission-statement-text-highlight'> a click of a button to become a homeowner. </div>
                    </div>
                    <div className='column'>
                        <AccretionMarketplace id="logo"/>
                    </div>
                </div>

                <div className='row'>
                    <div className='column-2'>
                        <Button variant='outline-primary' id='learn-more-button'> 
                            Learn more
                        </Button>
                        <Link to='/contact-us'>
                            <Button variant='outline-primary' id='contact-us-button'> 
                                Contact us
                            </Button>
                        </Link>
                       
                    </div>
                    
                    <div className='column'></div>
                </div>
            </div>

            <div className='segment'>
                
            </div>

        </div>
    )
}