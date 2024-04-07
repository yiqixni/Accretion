import SliderREITS from './SliderREITS';

import './Marketplace.css'; 
import '../home/Home.css'

export default function Marketplace () {

    return (        
        
        <div className='marketplace'>
            
            <div className='row'>
                <div id='small-title'>
                    Accretion 
                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    Marketplace brings all the fractional real estate to one place. 
                </div>
            </div>
            
            <div className='row'>
                <div id='title'>
                    REIT
                </div>                
            </div>

            <div className='slider'>
                <SliderREITS />
            </div>

            {/* <div className='row'>
                <div id='title'>
                    Fractional Real Estate
                </div>                
            </div>
            
            <div className='row'>
                <SliderREITS />
            </div>

            <div className='row'>
                <div id='title'>
                    Tokenized Real Estate 
                </div>                
            </div>
            
            <div className='row'>
                <SliderREITS />
            </div>

            <div className='row'>
                <div id='title'>
                    For Sale By Owner
                </div>                
            </div>
            
            <div className='row'>
                <SliderREITS />
            </div> */}

            <div className='row'>
                <div className='column'>
                    Description
                </div>

                <div className='column'>
                    Animation 
                </div>
            </div>
        </div>        
    )
};