import React from "react";
// import { Link } from "react-router-dom";

function PctResult() {
  const [personal_color,set_personal_color]=useState('Spring\nLight');
  return(      
      <div>
        <h1>����� �۽��� �÷��� .... </h1>
        {personal_color}�Դϴ�.
        <h2>��¼�� ����</h2>
      </div>
  )
}

export default PctResult;
