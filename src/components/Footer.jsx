/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import steam from '../images/steam.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import wild from '../images/wild.jpg';
import twitter from '../images/twitter.png';

function Footer() {
  return (
    <div className="containerfooter">
      <div className="sectionfooter">
        <div className="titlefooter">STEAM FINDER </div>
        <p className="text-footer">
          Reference website which allows you 
          <br />
          to find your Steam companions
          <br />
          Discover their friends,favorite games,...
        </p>
      </div>

      <div className="network">
        <a href="https://www.wildcodeschool.com/fr-FR">
          <img className="icone" src={wild} alt="wild" />
        </a>
        <a href="https://www.instagram.com/?hl=fr">
          <img className="icone" src={instagram} alt="instagram" />
        </a>
        <a href="https://twitter.com">
          <img className="icone" src={twitter} alt="twitter" />
        </a>
        /
        <a href="https://facebook.com">
          <img className="icone" src={facebook} alt="facebook" />
        </a>
        <a href="https://store.steampowered.com/?l=french">
          <img className="icone" src={steam} alt="steam" />
        </a>
      </div>
      <div className="sectionfooter">
        <div className="titlefooter"> LINKS </div>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/About" className="links">
          About
        </NavLink>
        <NavLink to="/Contact" className="links">
          Contact us
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
