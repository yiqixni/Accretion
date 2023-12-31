import { createBrowserRouter, 
         createRoutesFromElements, 
        //  Routes, 
         Route, 
        //  Link, 
         RouterProvider} from 'react-router-dom'; 
// import {useState, useEffect} from 'react';

import './App.css'; 

import RootLayout from './layout/RootLayout.js';
import Home from './home/Home.js';
// import SellerUpload from './sell/SellerUpload.js'; 
import Buy from './buy/Buy.js'; 
// import SinglePropertyView from './buy/SinglePropertyView.js'; 
import PropertyInfo from './property-info/PropertyInfo.js';
import Sell from './sell/Sell.js'; 
import AboutUs from './about-us/AboutUs.js';
import Signup from './user-auth/Signup.js';
import Login from './user-auth/Login.js';
import You from './You.js';
import NotFound from './NotFound.js';

import AuthJWT from './user-auth/AuthJWT.js'; 
import { useAuth } from './user-auth/AuthContext.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout/>} > 
      <Route index element={<Home/>} />
      <Route path="buy" element={<Buy/>} /> 
      <Route path="buy/:id" element={<PropertyInfo/>} /> 
      <Route path="sell" element={<Sell/>} />
      <Route path="about-us" element={<AboutUs/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="you" element={<You/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  ) 
);


function App() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    AuthJWT(); 
  }
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
