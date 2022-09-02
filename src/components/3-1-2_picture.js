import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dropzone from "./Dropzone";

function Picture_3() {
  const way = useLocation();
  console.log(way);
  return (
    <div>
      <Dropzone />
    </div>
  );
}

export default Picture_3;
