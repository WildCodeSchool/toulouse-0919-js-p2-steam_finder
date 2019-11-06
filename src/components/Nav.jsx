import React from 'react';
import './nav.css';
import Logo2 from '../images/Logo2.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <img src={Logo2} alt="Website logo" className="img-nav" />
      <div className="about-contact">
        <p>
          <a href="#.h">About</a>
        </p>
        <p>
          <Link to="/Contact">
            <a href="#.h">Contact</a>
          </Link>
        </p>
      </div>
    </nav>
  );
}

export default Nav;
