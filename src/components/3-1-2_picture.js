import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dropzone from "./Dropzone";

function Picture_3() {
  console.log("thisistest");
  const way = useLocation();
  console.log(way);
  return (
    <div>
      <p>사진 업로드</p>
      <Dropzone />
    </div>
  );
}

export default Picture_3;
