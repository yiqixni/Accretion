import { Helmet } from 'react-helmet';

import './Company.css'; 

import AboutUs from './AboutUs_v1.js'; 
import ContactUs from '../contact-us/ContactUs.js';
import Leadership from './Leadership.js';
import Career from './Career.js';

export default function Company () {
    return (
        <div>
            <Helmet>
                <title>Company | Accretion</title>
            </Helmet>

            {/* the first version of introduction is removed */}
            {/* <Introduction /> */}

            <AboutUs />
            <ContactUs />
            <Leadership />
            <Career />
        </div>
    )
}