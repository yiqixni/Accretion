import { createBrowserRouter, 
         createRoutesFromElements, 
        //  Routes, 
         Route, 
        //  Link, 
         RouterProvider} from 'react-router-dom'; 
// import {useState, useEffect} from 'react';

import './App.css'; 
import RootLayout from './layout/RootLayout.js';
import Home from './Home.js';
import SellerUpload from './sell/SellerUpload.js'; 
import AboutUs from './about-us/AboutUs.js';
import Signup from './user-auth/Signup.js';
import Login from './user-auth/Login.js';
import You from './You.js';

import AuthJWT from './user-auth/AuthJWT.js'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout/>} > 
      <Route index element={<Home/>} />
      <Route path="/seller-upload" element={<SellerUpload/>} />
      <Route path="about-us" element={<AboutUs/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="you" element={<You/>} />
    </Route>
  ) 
);


function App() {
  AuthJWT(); 
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
