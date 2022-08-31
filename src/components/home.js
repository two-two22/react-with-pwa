import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>hi from home</p>
      <Link to="/invoices">Invoices</Link> |
      <Link to="/3_pct_choice">퍼스널컬러 선택</Link>
    </div>
  );
}

export default Home;
