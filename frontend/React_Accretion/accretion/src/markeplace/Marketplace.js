import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie';

import SliderREITS from './logo-reit/SliderREITS';
import SliderFrac from './logo-fraction-property/SliderFrac';
import SliderWeb3 from './logo-web3/SliderWeb3';

// import MarketplaceDemo from './marketplace-demo/MarketplaceDemo';
import ContactUs from '../contact-us/ContactUs.js';

import ImgOrderBook from './img-order-book.jpg';
import ImgMapStats from './img-map-stats.jpg';
import AnimationStats from './lottie-animation-stats.json';

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

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationStats,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }    
};


export default function Marketplace () {

    return (        
        
        <div className='marketplace'>
            <Helmet>
                <title>Markeplace | The Best Real Estate Investment Exchange</title>
            </Helmet>
            <div className='row'>
                <div id='small-title'>
                    Accretion 
                </div>
            </div>

            <div className='row'> 
                <div className='headline-title'> 
                    <span id='highlight'> Marketplace. </span>  
                    All investment opportunities in real estate brought to ONE place.
                    <br/> 
                    {/* REITs, fractional ownership, and tokenized real estate equity.        */}
                    <TypeAnimation
                    sequence={[
                        'REIT.', // Types 'One'
                        1000, // Waits 1s
                        'Fractional ownership.', // Deletes 'One' and types 'Two'
                        1000, // Waits 2s
                        'Tokenized real estate equity.', // Types 'Three' without deleting 'Two'
                        1000,                         
                    ]}
                    wrapper="span"
                    deletionSpeed={100}
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block', color: 'purple' }}
                />
                    <br/>
                    Gain full control of your real estate investment portfolio.                     
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
                        Invest in REITS on Accretion Marketplace. 
                        Accretion Markeplace presents locations and ownership structures in each REIT, 
                        so you have the full knowledge of what you are investing in. 
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
                        Accretion Markeplace brings fractional home equity investment along side with REIT. 
                        Our platform gives you the full control of your real estate portfolio.                         
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
                        Accretion Marketplace is bringing Web3 to you along with traditional financial instruments. 

                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderWeb3 />
            </div>
            

            <div className='row'>            
                
                <div className='column'>
                    Your real estate investment presented in clear statistics. 
                    Gain full knowledge in what you are invested in.
                </div>

                <div className='column'>
                    {/* <img src={ImgMapStats} id='img-map-stats'/> */}
                    <div className="column-right" style={{overflow:"hidden"}} id='animation'>                         
                        <Lottie options={animationOptions}/>                        
                    </div>  
                </div>

            </div>            

            <div className='row'>
                
                <div className='column'>
                    <img src={ImgOrderBook} id='img-order-book'/>
                </div>

                <div className='column'>
                    <div id='text'>                                   
                    Get the true market price, through a completely 
                    <span className='highlight-transparent'> TRANSPARENT </span> 
                    bidding process. 
                    </div>                    
                </div>

            </div>
            
            <div className='row'> 
                
                <div id='title'>
                    Join Accretion Marketplace. 
                </div>

            </div>
            
            <div className='row'>
                <ContactUs/>
            </div>

        </div>        
    )
};

export { SliderSettings }; 