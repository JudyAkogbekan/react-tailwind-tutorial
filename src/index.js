import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './components/About';

ReactDOM.render(
  
  <BrowserRouter>
    <div>
   

    
      <Routes>
      <Route path="/" element={<App />} />

      <Route path="/about" element={<About />} />

      </Routes>

    </div>
    </BrowserRouter>,

  document.getElementById('root')
);
