import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Invoices from "./components/invoices";
import PctChoice from "./components/3_pct_choice";
import Picture from "./components/3-1_picture";
import Ai from "./components/3-1-1_ai";
import Self from "./components/3-2-1_self";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="3_pct_choice" element={<PctChoice />} />
        <Route path="3-1_picture" element={<Picture />} />
        <Route path="3-1-1_ai" element={<Ai />} />
        <Route path="3-2-1_self" element={<Self />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
