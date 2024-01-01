import CompanyContactCard from "./CompanyContactCard"; 
import ContactForm from "./ContactForm";

import './ContactUs.css'

export default function ContactUs () {
    return (
        <div className="contact-us">
            <div className="three-column-container"> 
                <div className='column'>
                    <h2>Contact us</h2>
                </div>
                <div className="column-2"></div>
            </div>
            <div className="three-column-container">
                <div className='column'> 
                    < CompanyContactCard />
                </div>
                <div className='column-2'> 
                    < ContactForm/> 
                </div> 
            </div>
        </div>
    )
}