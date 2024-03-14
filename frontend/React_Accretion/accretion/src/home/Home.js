import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';

import Sentence from './Mission_animation';
import './Home.css'
import AccretionDatabase from './AccretionDatabase.jsx';

export default function Home () {
    return (
        <div className='home'>

            <Helmet>
                <title>Accretion | Reduce Frictions in Housing Market</title>
            </Helmet>

            <div>
                <div className='segment-title'>
                    Accretion Database
                </div>

                <div className='three-column-container'>
                    <div className='column-2'>
                        <div id='mission-statement-title'>
                            Building a modern real estate database for 
                        </div>
                        <Sentence/>
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

            <div>
                <div className='segment-title'>
                    Accretion Marketplace
                </div>

                <div className='three-column-container'>
                    <div className='column-2'>
                        <div id='mission-statement-title'>
                            A total transparent marketplace to buy and sell properties from 
                        </div>
                        <Sentence/>
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
            
            <div className='segment-title'>
                <h6>
                    Accretion Marketplace
                </h6>
            </div>

            <div className='three-column-container'>
                <div>
                    <h5>Shop for all housing market investment in one place from</h5>
                    <h5>Fractional home equities</h5>
                    <h5>REITs</h5>
                    <h5>For Sale by Owners</h5>
                    <h5>with a transparent bidding process</h5>
                    <h5>with a clear financial statistics</h5>
                    <h5>with a click of a button to become a home owner</h5>
                </div>
                <div>
                    <button>Learn more</button>
                    <button>Pricing</button>
                </div>
            </div>

        </div>
    )
}