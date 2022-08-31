import React from "react";
import { Link } from "react-router-dom";
import Dropzone from "./Dropzone";

function Picture() {
  return (
    <div>
      <p>사진 업로드</p>
      <Dropzone/>
    </div>
  );
}

export default Picture;