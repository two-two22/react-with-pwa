import logo from './logo.svg';
import './App.css';

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home";
import Invoices from "./components/invoices";
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
