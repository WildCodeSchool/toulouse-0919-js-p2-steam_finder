import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Logo2 from '../images/Logo2.png';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo2} alt="Website logo" className="img-nav" />
      </Link>
      <div className="about-contact">
        <Link to="/About">
          <p className="link-navbar">About / Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
