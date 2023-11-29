import { createBrowserRouter, 
         createRoutesFromElements, 
         Routes, 
         Route, 
         Link, 
         RouterProvider} from 'react-router-dom'; 

import './App.css'; 
import RootLayout from './layout/RootLayout.js';
import Home from './Home.js';
import SellerUpload from './sell/SellerUpload.js'; 
import AboutUs from './about-us/AboutUs.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout/>} > 
      <Route index element={<Home/>} />
      <Route path="/seller-upload" element={<SellerUpload/>} />
      <Route path="about-us" element={<AboutUs/>} />
    </Route>
  ) 
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
