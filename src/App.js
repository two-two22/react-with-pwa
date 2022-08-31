import logo from "./logo.svg";
import "./App.css";

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mainpage from "./components/1_mainpage";
import PctChoice from "./components/3_pct_choice";
import Picture_2 from "./components/2-1-1_picture";
import Ai from "./components/3-1-1_ai";
import Self from "./components/3-2-1_self";
import PctResult from "./components/3-3_result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="2-1-1_picture" element={<Picture_2 />} />
          <Route path="3_pct_choice" element={<PctChoice />} />
          <Route path="3-1-1_ai" element={<Ai />} />
          <Route path="3-2-1_self" element={<Self />} />
          <Route path="3-3_result" element={<PctResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
