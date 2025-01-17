import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/favorites" className="nav-links">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
