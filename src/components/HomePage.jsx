import React from 'react';
import './HomePage.css';
import Logo3 from './Logo3.png';

function HomePage() {
  return (
    <div className="main-home">
      <img src={Logo3} alt="Website logo" className="img-home" />
      <h1 className="typo-title-home">STEAM FINDER</h1>
      <section className="search-home"></section>
    </div>
  );
}

export default HomePage;
