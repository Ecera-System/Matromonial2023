import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
          <h1>
            <Link to="/" className="/">Home</Link>
            </h1> 
          </li>
          <li className="nav-item">
            <h1>
            <Link to="/register" className="register">Register</Link>
            </h1>
          </li>
          <li className="nav-item">
            <h1><Link to="/login" className="login">Login</Link>
            </h1>
          </li>
          <li className="nav-item">
           <h1> <Link to="/profile" className="profile">User Profile</Link>
           </h1>
          </li>
        
          <li className="nav-item">
            <h1>
            <Link to="/admindashboard" className="admindashboard">Admin Dashboard</Link>
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
