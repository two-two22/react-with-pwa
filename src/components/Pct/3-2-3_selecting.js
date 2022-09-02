import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router";

import "./3-2-3_selecting.css";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { sizing } from "@mui/system";

import spring_bright from "../../photo/output_spring_bright.png";
import spring_light from "../../photo/output_spring_light.png";
import summer_light from "../../photo/output_summer_light.png";
import summer_mute from "../../photo/output_summer_mute.png";
import autumn_mute from "../../photo/output_autumn_mute.png";
import autumn_deep from "../../photo/output_autumn_deep.png";
import winter_deep from "../../photo/output_winter_deep.png";
import winter_bright from "../../photo/output_winter_bright.png";

var f = spring_bright;
var s = spring_light;

function PctSelect_2() {
  console.log("pctselect2");
  const location = useLocation();
  const season = location.state.season;
  console.log(season);

  switch (season) {
    case "spring":
      console.log("spring입니다");
      break;
    case "summer":
      console.log("summer입니다");
      f = summer_light;
      s = summer_mute;
      break;
    case "autumn":
      console.log("autumn입니다");
      f = autumn_mute;
      s = autumn_deep;
      break;
    case "winter":
      console.log("winter입니다");
      f = winter_deep;
      s = winter_bright;
      break;
  }

  var Tone = {
    first: (
      <img alt="face_1" src={f} height="400" width="300" border-radius="30px" />
    ),
    second: (
      <img alt="face_2" src={s} height="400" width="300" border-radius="30px" />
    ),
  };

  const [alignment, setAlignment] = React.useState("first");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div id="background">
      <h2 className="header">
        가장 얼굴이 환해보이는 배경을 <br /> 하나만 선택해주세요
      </h2>
      <div className="photo">{Tone[alignment]}</div> <br />
      <div className="toggle_button">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="first">1</ToggleButton>
          <ToggleButton value="second">2</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <br /><br/>
      <Link to="/3-3_result" state={{ season: season, tone: alignment }}>
        <AwesomeButton type="primary" value={alignment}>
          선택완료
        </AwesomeButton>
      </Link>
      <br />
      <br />
    </div>
  );
}

export default PctSelect_2;
