import React, { memo } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
      <Link to="/form">Form</Link>
      <Link to="/health">Health</Link>
    </nav>
  );
}

export default memo(Navigation);
