import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';
import { IoIosCloseCircleOutline, IoIosArrowForward } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';
import logo from './logo_letters_v2.svg'; 

import { useAuth } from '../user-auth/AuthContext'; 


export default function Header() {
    /* authenticate user with AuthContext */ 
    const { isLoggedIn } = useAuth();   

    const [showMenu, setShowMenu] = useState(false); 

    const toggleMenu = () => {
        setShowMenu(!showMenu); 
    }

    return (
        <header className="header">
            <div className='logo-section'>                
                <Link to="/"> 
                    <img src={logo} id="header_logo"/> 
                </Link>                
            </div>     

            <div className='menu-section'>                
                    <Link to="/database"> 
                        <Button variant='outline-primary' id='dropdown-basic'>
                            Database 
                        </Button>
                    </Link>                                
            </div>

            <div className='menu-section'>                       
                <Button variant='outline-primary' id='dropdown-basic'>
                    Marketplace 
                </Button>                                
            </div>            

            <div className='menu-section'> 
                <Link to="/company"> 
                    <Button variant='outline-primary' id='dropdown-basic'> 
                        Company
                    </Button>
                </Link>
            </div>                

            <div className='contact-section'> 
                <Link to="/contact-us"> 
                    <Button variant='outline-primary' id='button-contact-us'> 
                        Contact Us
                    </Button>
                </Link>
            </div>
            
            <div className='show-menu-section'>
                <Button variant='outline-primary' id='dropdown-basic' onClick={toggleMenu}>
                    {showMenu ? <IoIosCloseCircleOutline/> : <FaBars/>}                    
                </Button>
            </div>

            {showMenu && 
                <div className='overlay'>             

                    <Link to="/database" onClick={toggleMenu}> 
                        <div className='menu-container-mobile'>                                                                            
                            <div id='option'> Database </div>                                                             
                        </div>
                    </Link>       

                    <div className='menu-container-mobile-line'>
                        <div className='line'></div>
                    </div>      

                    <Link>
                        <div className='menu-container-mobile' onClick={toggleMenu}>                                                                              
                            <div id='option'> Marketplace </div>                                                                            
                        </div>    
                    </Link>    

                    <div className='menu-container-mobile-line'>
                        <div className='line'></div>
                    </div>      

                    <Link to="/company"> 
                        <div  className='menu-container-mobile' onClick={toggleMenu}>                                                         
                            <div id='option'> Company </div>                                                        
                        </div> 
                    </Link>      

                    <div className='menu-container-mobile-line'>
                        <div className='line'></div>
                    </div>      
                                        
                    
                    <Link to="/contact-us">
                        <div className='menu-container-mobile' onClick={toggleMenu}>                                                              
                            <div id='option'> Contact Us </div>                                                            
                        </div>
                    </Link>

                </div>
            }
        
        </header>
    );
}