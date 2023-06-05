import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import logo from './logo.png';

export const Header = () => {
  return (
    <header className="header">
    <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Book Finder</h1>
      </div>
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
