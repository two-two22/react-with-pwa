import React from "react";
import { Link } from "react-router-dom";

function PctChoice() {
  return (
    <div>
      <p><Link to="/3-1-1_ai">AI에게 분석 맡기기</Link></p>
      <p><Link to="/3-2-1_self"> 내가 직접 분석하기</Link></p>
    </div>
  );
}

export default PctChoice;
