import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/dropdown'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';
import logo from './logoAccretion.svg'; 

// import AuthJWT from '../user-auth/AuthJWT';
import CheckJWTaccess from '../user-auth/CheckJWTaccess';
import RefreshJWTaccess from '../user-auth/RefreshJWTaccess';

export default function Header() {
    const [showSub_buy, setSub_buy] = useState(false);
    const handleMouseEnter_buy = () => setSub_buy(true); 
    const handleMouseLeave_buy = () => setSub_buy(false); 

    const [showSub_sell, setSub_sell] = useState(false);
    const handleMouseEnter_sell = () => setSub_sell(true); 
    const handleMouseLeave_sell = () => setSub_sell(false); 

    const [isLoggedin, setIsLoggedin] = useState(null); 

    /* test if the JWT access token is valid */
    const [jwt, setJWT] = useState(JSON.parse(localStorage.getItem('jwt'))); 

    useEffect(() => {
        if (jwt && jwt.access != "" && jwt.refresh != "") {
            console.log("JWT token is found in local storage ", jwt);
            CheckJWTaccess(jwt.access) 
            .then( response => {
                console.log("checkJWTaccess response: ", response);
                if (response == true) {
                    console.log("JWT access token is valid");
                    setIsLoggedin(true);
                } else { 
                    console.log("JWT access token is invalid, try to refresh");
                    // try to refresh the JWT access token 
                    RefreshJWTaccess(jwt.refresh)
                    .then( response => {
                        if (response) {
                            setIsLoggedin(true);
                        }
                    });
                }
            }
            )
        }
    },[]);

    /* use try and catch to auth JWT token */ 
    // const AuthJWT = async () => {
    //     try {
    //         const response = await CheckJWTaccess(" "); 
            
    //         if (response) {
    //             console.log("JWT access token is valid");
    //             setIsLoggedin(true); 
    //         } else{
    //             // refresh the JWT access token 
    //             const response = await RefreshJWTaccess(jwt.refresh);
    //         }

    //     } catch (error) {

    //     }
    // }

    // useEffect(() => {
    //     if (jwt) {
    //         console.log("JWT token is found in local storage");
    //         AuthJWT();
    //     } else {
    //         console.log("JWT token is not found in local storage, please login");
    //     }
    // });

    /* test AuthJWT that has both JWT access and refresh function */
    // useEffect(() => {
    //     AuthJWT()
    //     .then( response => {
    //         console.log(response);
    //     })
    // }, []);

    

    return (
        <header className="header">
            <Link to="/"> 
                <img 
                    src={logo} 
                    className="header_logo"
                /> 
            </Link>
            <Dropdown className='menu_container'
                    onMouseEnter={handleMouseEnter_buy}
                    onMouseLeave={handleMouseLeave_buy}>
                <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
                    Buy
                </Dropdown.Toggle>
                <Dropdown.Menu show={showSub_buy}>
                    <Dropdown.Item>
                        Home
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Office
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Commercial
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='menu_container'
                    onMouseEnter={handleMouseEnter_sell}
                    onMouseLeave={handleMouseLeave_sell}>
                <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
                    <Link to="/seller-upload"> Sell </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu show={showSub_sell}>
                    <Dropdown.Item>
                        Home
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Office
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Commercial
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className='menu_container'> 
                <Link to="/about-us"> 
                    <Button variant='outline-primary' id='dropdown-basic'> 
                        About Us
                    </Button>
                </Link>
            </div>
            {!isLoggedin && (
                <div className='menu_container'>
                    <Link to="/signup">
                        <Button variant='outline-primary' id='dropdown-basic'>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            )}
            {!isLoggedin && (
                <div className='menu_container'>
                    <Link to="/login">
                        <Button variant='outline-primary' id='dropdown-basic'>
                            Login
                        </Button>
                    </Link>
                </div>
            )}
            {isLoggedin && (
                <div className='menu_container'>
                    <Link to="/you">
                        <Button variant='outline-primary' id='dropdown-basic'>
                            You
                        </Button>
                    </Link>
                </div>
            )}
            
                
        </header>
    );
}
