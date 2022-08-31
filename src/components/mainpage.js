import React from 'react';
import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      <p style={{
        fontSize: 50,
        color: '#216BAD',
        }}>
        ABOUT<br/>ME</p>
      <Link to="/invoices">안녕하세요</Link>
    </div>
  );
}

export default Mainpage;
