//import logo from './logo.svg';
import './App.css';

import React from 'react';
import Shop from './Shop';
import Topbar from './Topbar';

import {BrowserRouter,Route,Routes} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Shop />} path='/' />


    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
