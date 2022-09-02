import React from "react";
import { Link } from "react-router-dom";
import "./1_mainpage.css";
import { AwesomeButton } from "react-awesome-button";


function Mainpage() {
  return (
    <div id="background">
      <br/><hr></hr>
      <p
        id="title"
        style={{
          fontSize: 60,
          color: "#216BAD",
          letterSpacing: "-1px" /* 자간 늘리거나 줄이기 */,
          scale: "1 1.18",
        }}
      >
        ABOUT
        <br /><br/>
        ME
      </p><br/>
      <div>
      <Link to="/2-1-1_picture" >
        <AwesomeButton type="link">나의 얼굴 분석하러 가기</AwesomeButton>
      </Link>
      </div><br/><br/>
      
      <div>
      <Link to="/3_pct_choice" >
            <AwesomeButton type="link">퍼스널컬러 분석하러 가기</AwesomeButton>
      </Link>
      </div>


      <p id="twotwo">
      <br/><br/><br/><br/><br/>
        <hr id="hr"></hr>
        Made by 22
      </p>

    </div>
  );
}

export default Mainpage;
