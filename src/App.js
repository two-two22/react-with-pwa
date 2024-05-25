import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainpage from "./components/1_mainpage";
import PctChoice from "./components/3_pct_choice";
import Picture_2 from "./components/2-1-1_picture";
import FSResult from "./components/2-2_result";
import Picture_3 from "./components/3-1-2_picture";
import PctResult from "./components/Pct/3-3_result";
import PctSelect from "./components/Pct/3-2-2_selecting";
import PctSelect2 from "./components/Pct/3-2-3_selecting";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="2-1-1_picture" element={<Picture_2 />} />
          <Route path="2-2_result" element={<FSResult />} />
          <Route path="3_pct_choice" element={<PctChoice />} />
          <Route path="3-1-2_picture" element={<Picture_3 />} />
          <Route path="3-2-2_selecting" element={<PctSelect />} />
          <Route path="3-2-3_selecting" element={<PctSelect2 />} />
          <Route path="3-3_result" element={<PctResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;