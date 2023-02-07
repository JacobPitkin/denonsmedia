import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex px-4 border-b md:shadow-lg items-center relative">
      <div className="text-lg font-bold md:py-0 py-4">
        Denons Media
      </div>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li>
          <Link to="/" className="flex md:inline-flex p-4 items-center hover:bg-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/games" className="flex md:inline-flex p-4 items-center hover:bg-gray-300">Games</Link>
        </li>
        <li>
          <Link to="/movies" className="flex md:inline-flex p-4 items-center hover:bg-gray-300">Movies</Link>
        </li>
        <li>
          <Link to="/reviews" className="flex md:inline-flex p-4 items-center hover:bg-gray-300">Reviews</Link>
        </li>
      </ul>
    </nav>
    // <div className="flex items-end w-full">
    //   <Link to="/">Home</Link>
    //   <Link to="/games">Games</Link>
    // </div>
  );
}

export default Navbar;
