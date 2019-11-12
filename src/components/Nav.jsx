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
        <p className="link-navbar">About </p>
        <p>
          <Link to="/Contact">
            <p className="link-navbar">Contact</p>
          </Link>
        </p>
      </div>
    </nav>
  );
}

export default Nav;
