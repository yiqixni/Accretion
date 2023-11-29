import { BrowserRouter, createBrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

import './App.css'; 
import Home from './Home.js';
import Header_bootstrap from "./Header_bootstrap"; 
import SellerUpload from './SellerUpload.js'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header_bootstrap /> 
          <main>
            <Routes>
              <Route path="/" element={< Home/ >} />
              <Route path='/seller-upload' element={< SellerUpload/ >} />          
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
