import React from 'react';
import { Link } from 'react-router-dom';

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";


import './Footer.css'; // Import CSS styles for the footer
import logo from './logo_letters_v2.svg'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">                
                <div className="footer-item">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="footer-logo" />
                    </Link>                    
                </div>
            </div>

            <div className="footer-column">                
                <div className="footer-item">                    
                    <div id='footer-item-title'>About </div>                                        
                </div>
                
                <div className='footer-item'>   
                    <Link to="/career" style={{textDecoration: "none"}}>
                        <div id='footer-item-option'> Career </div>                
                    </Link>             
                </div>                                                    
                
                <div className='footer-item'>
                    <Link to="/Leadership" style={{textDecoration: "none"}}>
                        <div id='footer-item-option'> Leadership </div>
                    </Link>
                </div>

            </div>

            <div className="footer-column">                
                <div className='footer-item'>
                    <div id='footer-item-title'> Support </div>
                </div>

                <div className='footer-item'> 
                    <Link to="/contact-us" style={{textDecoration: "none"}}>
                        <div id='footer-item-option'> Contact Us </div>
                    </Link>
                </div>

                <div className='footer-item'>
                    <Link to="/book-meeting" style={{textDecoration: "none"}}>
                        <div id='footer-item-option'> Book Meeting </div>
                    </Link>
                </div>

                <div className='footer-item'>
                    <Link to="/message-us" style={{textDecoration: "none"}}>
                        <div id='footer-item-option'> Message Us </div>
                    </Link>
                </div>
                
            </div>

            <div className="footer-column"> 
                <div className='footer-item'>
                        <div id='footer-item-title'> Social </div>
                    </div>

                    <div className='footer-item'>
                        <Link to="https://twitter.com/AccretionHome" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{textDecoration: "none"}}
                        >
                            <div id='footer-item-option'> 
                                <FaSquareXTwitter id="footer-item-option-logo"/>
                                X 
                            </div>
                        </Link>
                    </div>

                    <div className='footer-item'>
                        <Link to="https://www.linkedin.com/company/accretion-database" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{textDecoration: "none"}}
                        >
                            <div id='footer-item-option'> 
                                <FaLinkedin id="footer-item-option-logo"/>
                                LinkedIn 
                            </div>
                        </Link>
                    </div>

                    <div className='footer-item'>
                        <Link to="https://www.facebook.com/profile.php?id=61554696935151" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{textDecoration: "none"}}
                        >
                            <div id='footer-item-option'> 
                                <FaFacebook id="footer-item-option-logo"/>
                                Facebook 
                            </div>
                        </Link>
                    </div>

                    <div className='footer-item'>
                        <Link to="https://youtube.com/@Accretion-cp3cj?si=DlPEr5iYg5a1pHFP" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{textDecoration: "none"}}
                        >
                            <div id='footer-item-option'> 
                                <FaYoutube id="footer-item-option-logo"/>
                                YouTube 
                            </div>
                        </Link>
                    </div>
                
                </div>
        </footer>
    );
};

export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
// import logo from './logo_letters_v2.svg';
// import './Footer.css'; // Import CSS styles for the footer

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-column">
//                 <div className="footer-item">
//                     <Link to="/">
//                         <img src={logo} alt="Logo" className="footer-logo" />
//                     </Link>
//                 </div>
//             </div>

//             <div className="footer-column">
//                 <div className="footer-item">
//                     <div className="footer-item-title">About</div>
//                 </div>
//                 <div className="footer-item">
//                     <Link to="/career" className="footer-item-option">
//                         Career
//                     </Link>
//                 </div>
//                 <div className="footer-item">
//                     <Link to="/leadership" className="footer-item-option">
//                         Leadership
//                     </Link>
//                 </div>
//             </div>

//             <div className="footer-column">
//                 <div className="footer-item">
//                     <div className="footer-item-title">Support</div>
//                 </div>
//                 <div className="footer-item">
//                     <Link to="/contact-us" className="footer-item-option">
//                         Contact Us
//                     </Link>
//                 </div>
//                 <div className="footer-item">
//                     <Link to="/book-meeting" className="footer-item-option">
//                         Book Meeting
//                     </Link>
//                 </div>
//                 <div className="footer-item">
//                     <Link to="/message-us" className="footer-item-option">
//                         Message Us
//                     </Link>
//                 </div>
//             </div>

//             <div className="footer-column">
//                 <div className="footer-item">
//                     <div className="footer-item-title">Social</div>
//                 </div>
//                 <div className="footer-item">
//                     <div className="footer-item-option">
//                         <FaSquareXTwitter className="footer-item-option-logo" />
//                         Twitter
//                     </div>
//                 </div>
//                 <div className="footer-item">
//                     <div className="footer-item-option">
//                         <FaLinkedin className="footer-item-option-logo" />
//                         LinkedIn
//                     </div>
//                 </div>
//                 <div className="footer-item">
//                     <div className="footer-item-option">
//                         <FaFacebook className="footer-item-option-logo" />
//                         Facebook
//                     </div>
//                 </div>
//                 <div className="footer-item">
//                     <div className="footer-item-option">
//                         <FaYoutube className="footer-item-option-logo" />
//                         YouTube
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
