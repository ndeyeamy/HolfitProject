// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Holfit</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/nutrition">Nutrition</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
