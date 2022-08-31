import React from "react";
import { Link } from "react-router-dom";

function PctChoice() {
  return (
    <div>
      <Link to="/3-1-1_ai">AI에게 분석 맡기기</Link> |
      <Link to="/3-2-1_self"> 내가 직접 분석하기</Link>{" "}
    </div>
  );
}

export default PctChoice;
