import React from "react";
// import { Link } from "react-router-dom";

function PctResult() {
  const [personal_color,set_personal_color]=useState('Spring\nLight');
  return(      
      <div>
        <h1>당신의 퍼스널 컬러는 .... </h1>
        {personal_color}입니다.
        <h2>어쩌구 설명</h2>
      </div>
  )
}

export default PctResult;
