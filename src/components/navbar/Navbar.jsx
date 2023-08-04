// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Talent Plus</div>
      <ul className="nav-links">
        <li>
          <Link to="#">Login</Link>
        </li>
        <li>
          <Link to="#">Signup</Link>
        </li>
        <li>
          <Link to="/upload-resume">Upload Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
