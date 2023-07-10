// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
       
        <li>
          <h1>
            <Link to="/">Home</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="/register">Register</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="/profile">User Profile</Link>
          </h1>
        </li>
        <li><h1>
          <Link to="/admindashboard">AdminDashboard</Link></h1>
        </li>
        
          
      
        
      </ul>
    </nav>
  );
};

export default Navbar;
