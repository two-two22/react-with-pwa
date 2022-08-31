import React from "react";
import {useState} from "react"
// import { Link } from "react-router-dom";

function PctResult() {
  const [personal_color,set_personal_color]=useState('Spring\nLight');
  return(      
      <div>
        <h1>퍼스널컬러 .... </h1>
        {personal_color}입니다.
        <h2>설명</h2>
      </div>
  )
}

export default PctResult;
