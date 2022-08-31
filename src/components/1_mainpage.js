import React from 'react';
import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      <p style={{
        fontSize: 50,
        color: '#216BAD',
        letterSpacing: '-1px', /* 자간 늘리거나 줄이기 */
        scale: '1 1.18'
        }}>
        ABOUT<br/>ME
      </p>
      <p><Link to="/2-1-1_picture">나의 얼굴 분석하러 가기</Link></p>
      <p><Link to="/3_pct_choice">퍼스널컬러 분석하러 가기</Link></p>
    </div>
  );
}

export default Mainpage;
