import SliderREITS from './logo-reit/SliderREITS';
import SliderFrac from './logo-fraction-property/SliderFrac';
import SliderWeb3 from './logo-web3/SliderWeb3';

import MarketplaceDemo from './marketplace-demo/MarketplaceDemo';

import './Marketplace.css'; 
import '../home/Home.css'

const SliderSettings = {
    className: "center", 
    centerMode: true, 
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,     
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,     
    touchMove: true, // Enable touch interactions
    touchThreshold: 10, // Threshold for touch swipe (in pixels)
    responsive: [
      {
        breakpoint: 769, // Screen width at which the settings will change (desktop)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Screen width at which the settings will change (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};


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
                    <br/>
                    Accretion is bringing all atlernative real estate investment into one Marketplace. 
                    <br/>
                    Get the full knowledge of what you are investing, powered by the clearest statistics in Accretion Marketplace. 
                    <br/>
                    Transparency 

                </div>
            </div>
            
            <div className='row'>
                
                <div className='column'>
                    <div id='title'>
                        REIT
                    </div>  
                </div>

                <div className='column'>
                    <div id='text'>
                        Buy and sell any REITs on the Accretion Marketplace. 
                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderREITS />
            </div>

            <div className='row'>
                
                <div className='column'>
                    <div id='title'>
                        Fractional Real Estate 
                    </div>  
                </div>

                <div className='column'>
                    <div id='text'>
                        Buy and sell any fractional real estate equity on the Accretion Marketplace. 
                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderFrac />
            </div>


            <div className='row'>
                
                <div className='column'>
                    <div id='title'>
                        Web3
                    </div>  
                </div>

                <div className='column'>
                    <div id='text'>
                        Buy and sell any Web3 tokenized equity on the Accretion Marketplace. 
                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderWeb3 />
            </div>
          
            <MarketplaceDemo/>
        

        </div>        
    )
};

export { SliderSettings }; 