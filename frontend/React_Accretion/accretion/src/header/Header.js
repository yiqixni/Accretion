/* 
Follow this blog https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/#multilevel-menu-vs-megamenu 
to learn how to code dropdown menu from scratch
*/

import logo from './logoAccretion.svg'; 
import './Header.css';
import React, {useState} from 'react'; 

function Header () {
    const [isSubVisible_buy, setSubVisible_buy] = useState(false);
    // const [isSubVisible_sell, setSubVisible_sell] = useState(false);

    const handleHover_buy = () => {
        setSubVisible_buy(true); 
    }
    const handleLeave_buy = () => {
        setSubVisible_buy(false);
    }

    return (
        <header className="header">
            <img 
                src={logo} 
                className="header_logo"
            /> 
            <div className='menu_container'>
                <button className="header_button"
                onMouseEnter={handleHover_buy} 
                onMouseLeave={handleLeave_buy}
                >
                    Buy
                </button>
                {isSubVisible_buy && (
                    <div>
                        <button className='submenu_button'>Home</button>
                        <button className='submenu_button'>Office</button>
                    </div>
                )}
            </div> 

            {/* <button className="header_button">
                Sell
            </button>
            <button className="header_button">
                About Us
            </button> */}
        </header>
    )
}

export default Header; 