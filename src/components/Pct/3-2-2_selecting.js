import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router";

import "./3-2-2_selecting.css";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { sizing } from "@mui/system";

import spring_image from "../../photo/output_spring.png";
import summer_image from "../../photo/output_summer.png";
import autumn_image from "../../photo/output_autumn.png";
import winter_image from "../../photo/output_winter.png";

var Season = {
  spring: (
    <img
      alt="face_1"
      src={spring_image}
      height="400"
      width="300"
      border-radius="30px"
    />
  ),
  summer: (
    <img
      alt="face_2"
      src={summer_image}
      height="400"
      width="300"
      border-radius="30px"
    />
  ),
  autumn: (
    <img
      alt="face_3"
      src={autumn_image}
      height="400"
      width="300"
      border-radius="30px"
    />
  ),
  winter: (
    <img
      alt="face_4"
      src={winter_image}
      height="400"
      width="300"
      border-radius="30px"
    />
  ),
};

function PctSelect() {
  const [alignment, setAlignment] = React.useState("spring");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div id="background">
      <h2 className="header">
        가장 얼굴이 환해보이는 배경을 <br /> 하나만 선택해주세요
      </h2>
      <div className="photo">{Season[alignment]}</div> <br />
      <div className="toggle_button">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="spring">1</ToggleButton>
          <ToggleButton value="summer">2</ToggleButton>
          <ToggleButton value="autumn">3</ToggleButton>
          <ToggleButton value="winter">4</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <br /><br/>
      <Link to="/3-2-3_selecting" state={{ season: alignment }}>
        <AwesomeButton type="primary" value={alignment}>
          선택완료
        </AwesomeButton>
      </Link>
      <br />
      <br />
    </div>
  );
}

export default PctSelect;
