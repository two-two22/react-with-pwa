import logo from './logo.svg';
import './App.css';

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mainpage from "./components/mainpage";
import Invoices from "./components/invoices";
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
