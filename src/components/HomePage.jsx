import React from 'react';
import './HomePage.css';
import IconeLogo from '../images/logosteamfinder3.png';
import SearchHome from './SearchHome';

function HomePage() {
  return (
    <div className="homePageStyle">
      <img className="iconeLogo" src={IconeLogo} alt="iconeLogo" />
      <h1 className="homeTitle">STEAM FINDER</h1>
      <div className="divSearchBar">
        <p className="firstTierText">Need to find a steam user ?</p>
        <p className="secondTierText">Search now !</p>
        <input className="inputTest" />
      </div>
    </div>
  );
}

export default HomePage;
