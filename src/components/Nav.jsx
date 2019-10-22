import React from 'react';
import './nav.css';
import Logo2 from '../Logo2.png';

function Nav() {
  return (
    <nav className="nav">
      <img src={Logo2} alt="Website logo" className="img-nav" />
      <div className="about-contact">
        <p>
          <a href="#.h">About</a>
        </p>
        <p>
          <a href="#.h">Contact</a>
        </p>
      </div>
    </nav>
  );
}

export default Nav;
