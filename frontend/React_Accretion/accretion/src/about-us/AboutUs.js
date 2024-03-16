import { Helmet } from 'react-helmet';

import './AboutUs.css'; 
import Introduction from './Introduction.js';
import ContactUs from '../contact-us/ContactUs.js';

export default function AboutUs () {
    return (
        <div className='about-us'>
            <Helmet>
                <title>About Us | Accretion</title>
            </Helmet>

            {/* the first version of introduction is removed */}
            {/* <Introduction /> */}
            
            <ContactUs />
        </div>
    )
}