import React from "react";
import { Link } from "react-router-dom";
import Icon from "../photo/icon.png"
import { AwesomeButton } from "react-awesome-button";

function PctChoice() {
  return (
    <div>

      <img src={Icon} alt="logo_icon" height="300" weight="250"></img><br/>
      <div>
        <p>
        <Link to="/3-1-2_picture">
          <AwesomeButton type="link">AI 퍼스널컬러 분석하기</AwesomeButton>
        </Link>
        </p>

        <p>
          <Link to="/3-1-2_picture">
            <AwesomeButton type="link">내가 직접 분석하기</AwesomeButton>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PctChoice;
