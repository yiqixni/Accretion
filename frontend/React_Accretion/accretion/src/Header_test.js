import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/dropdown'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header_bootstrap.css';
import logo from './logoAccretion.svg'; 
import SellerUpload from './SellerUpload';
import Home from './Home';

export default function Header_test() {

    return (
        <Router>
            <header className="header">
                <Link to="/seller-upload">
                    <img 
                        src={logo} 
                        className="header_logo"
                    /> 
                </Link>
                <Routes>
                    <Route path='/seller-upload' element={< SellerUpload/ >} />
                </Routes>
            </header>
        </Router>
        
    );
}
