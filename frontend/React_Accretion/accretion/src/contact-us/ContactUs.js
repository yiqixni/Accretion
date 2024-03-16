import CompanyContactCard from "./CompanyContactCard"; 
import ContactForm from "./ContactForm";

import './ContactUs.css'

export default function ContactUs () {
    return (
        <div className="contact-us">
            <div className="three-column-container"> 
                <div className='column' id="title">
                    Contact Us
                </div>
            </div>

            <div className="three-column-container">
                <div className='column'> 
                    <div id="texts">
                    Please let us know what we can help you. 
                    Let us build a modern database and marketplace for the housing market. 
                    </div>
                    < CompanyContactCard />
                </div>

                {/* <div className='column'> 
                    < ContactForm/> 
                </div>  */}

            </div>
        </div>
    )
}