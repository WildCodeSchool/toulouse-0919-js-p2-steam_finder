/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './style.css';
import steam from '../steam.png';
import facebook from '../facebook.png';
import instagram from '../instagram.png';
import wild from '../wild.jpg';
import twitter from '../twitter.png';

function Footer() {
  return (
    <div className="containerfooter">
      <div className="sectionfooter">
        <div className="titlefooter">STEAM FINDER </div>
        <p className="text-footer">
          Reference website which allows you to find your Steam companions
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
        <a className="links" href>
          Home
        </a>
        <a className="links" href>
          About
        </a>
        <a className="links" href>
          Contact us
        </a>
      </div>
    </div>
  );
}

export default Footer;
