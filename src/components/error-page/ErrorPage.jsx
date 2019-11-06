import React from 'react';
import './ErrorPage.css';
import LogoRobot from '../../images/broken-robot_icon-icons.com_55288.png';

function ErrorPage() {
  return (
    <div className="errorPage">
      <h1 className="errorTitre">STEAM FINDER</h1>
      <p className="p1">Sorry, I didn't find</p>
      <p className="p2">this player</p>
      <p className="p3">Retry please !</p>
      <img className="brokenRobot" src={LogoRobot} alt="LogoRobot" />
      <div className="searchBarStyle">
        <input className="searchBar" type="text" />
      </div>
    </div>
  );
}

export default ErrorPage;
