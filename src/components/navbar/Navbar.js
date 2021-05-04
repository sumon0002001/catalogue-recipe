import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="flex">
      <img src="/images/img.png" alt="Logo" />
      <h2>My Recipes</h2>
    </div>
    <Link to="/" className="nav-link">Home</Link>
  </div>
);

export default Navbar;
