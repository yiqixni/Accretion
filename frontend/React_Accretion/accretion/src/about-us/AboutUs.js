import './AboutUs.css'; 
import CustodianLogo from './CustodianLogo.jsx';
import BidAskChart from './BidAskChart.jsx';
import Handshake from './Handshake.jsx';

export default function AboutUs () {
    return (
        <div>
            <div> 
                <h1> About Us </h1>
            </div>

            <div className="three-column-container">
                <div className="column">
                    <h2>Who we are</h2>
                </div>
                <div className="column-2">
                    <p>
                    Accretion is a fintech startup inventing a modern real estate exchange. 
                    Our mission is to build an equitable housing market one share at a time. 
                    We aim to create the most affordable place for you to buy and sell real estates.
                    </p>
                </div>
            </div>

            <div>
                <div className="three-column-container">
                    <div className="column">
                        <h2>How it works</h2>
                    </div>
                    <div className="column-2"> </div>
                </div>
                <div className='three-column-container'>
                    <div className='column'>
                        <p>Accretion is the custodian of your property title.</p>
                        < CustodianLogo id="image"/>
                    </div>
                    <div className='column'>
                        <p>Place bids and asks on our exchange.</p>
                        < BidAskChart id="image"/>
                    </div>
                    <div className='column'>
                        <p>The trade is executed when buyer and seller agree on price.</p>
                        < Handshake id="image"/>
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}