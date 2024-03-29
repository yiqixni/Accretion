import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';

import './Database.css';

import CountyMap from './Usa_counties_large.png';
import Visualization from './database-abstract-of-title-visualization.svg';
import Service from './database-services.svg';
import StatementAnimation1 from './StatementAnimation1';
import StatementAnimation2 from './StatementAnimation2';

export default function Database () {
    return (
        <div>
            <Helmet>
                <title>Database | Property Deeds in One Place</title>
            </Helmet>

            <div className='two-column-container'>
                <div className='small-title'>Accretion</div>
            </div>

            <div className='two-column-container'>
                <div className='headline-title'>
                    <span id='highlight'>Database. </span> 
                    Find ALL real estate titles and deeds in ONE place. 
                </div>
            </div>

            <div className='two-column-container'>
                <div className='column'> 
                    <div id='title'>All data in one place. </div> 
                    Unify deeds and titles that are scattered from 3,000+ counties into one modern database. 
                    
                    Complete your title search task in seconds. 
                    Shorten your closing process time. 
                    
                    Accretion Database lets you invest in the housing market with confidence and speed.
                    by empowering you with 

                    <StatementAnimation1/> 
                    
                    <Link to='/contact-us' style={{ textDecoration: 'none' }}>
                        <div className='button'>                            
                            <Button id='learn-more-button'>
                                Contact us to learn more
                            </Button>               
                        </div>
                    </Link>

                    <Link to='/database/demo' style={{ textDecoration: 'none' }}>
                        <div className='button'>                            
                            <Button id='learn-more-button'>
                                Reqeust a demo
                            </Button>               
                        </div>
                    </Link>
                   

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
                    Trace the chain of title history with clear graphics. 
                    Transform the cryptic abstract of title into the easy-to-understand blocks. 
                    Understand every property transaction through simple, visual representations. 
                    
                    <Link to='/contact-us' style={{ textDecoration: 'none' }}>
                        <div className='button'>                            
                            <Button id='learn-more-button'>
                                Contact us to learn more
                            </Button>               
                        </div>
                    </Link>

                    <Link to='/database/demo' style={{ textDecoration: 'none' }}>
                        <div className='button'>                            
                            <Button id='learn-more-button'>
                                Request a demo
                            </Button>               
                        </div>
                    </Link>
                </div>
            </div>

            <div className='two-column-container'>
                <div className='column'> 
                    <div id='title'>Service to real estate experts. </div> 
                    Designed to service real estate professionals.                
                    Building to empower everyone to become a real estate expert.                     
                    We are here to serve you whether you are: 
                    <StatementAnimation2/>
                    
                    <Link to='/contact-us' style={{ textDecoration: 'none' }}>
                        <div className='button'>                            
                            <Button id='learn-more-button'>
                                Contact us to learn more
                            </Button>               
                        </div>
                    </Link>        

                    <Link to='/database/demo' style={{ textDecoration: 'none' }}>
                        <div className='button'>                            
                            <Button id='learn-more-button'>
                               Request a demo
                            </Button>               
                        </div>
                    </Link>            
                </div>

                <div className='column'>
                <img src={Service} id='pic'/>
                </div>

            </div>

            <div className='two-column-container'>
                <div className='headline-title'>
                    We are dedicated to empowering 
                    <span id='highlight'> EVERYONE </span> 
                    to become an expert by building the most comprehensive database.
                </div>
            </div>

            <Link to='/contact-us' style={{ textDecoration: 'none' }}>
                <div className='button'>                            
                    <Button id='learn-more-button'>
                        Contact us to learn more
                    </Button>               
                </div>
            </Link>

            <Link to='/database/demo' style={{ textDecoration: 'none' }}>
                <div className='button'>                            
                    <Button id='learn-more-button'>
                        Request a demo
                    </Button>               
                </div>
            </Link>

            <div className='two-column-container'>

            </div>

        </div>
    )
}