import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-end w-full">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
    </div>
  );
}

export default Navbar;
