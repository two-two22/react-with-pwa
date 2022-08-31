import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div><p>hi from home</p>
      <Link to="/invoices">Invoices</Link> |{" "}
    </div>
  );
}

export default Home;
