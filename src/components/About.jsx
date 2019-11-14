import React from 'react';
import './About.css';
import ericka from '../images/ericka.jpg';
import ines from '../images/ines.jpg';
import marion from '../images/marion.jpg';
import yann from '../images/yann.jpg';

function About() {
  return (
    <div className="SectionAbout">
      <h1 className="AboutTitle">About</h1>
      <img src="" alt="" />
      <p className="AboutText">
        Born in October 2019, the Steam finder team, is a group of young developers wish to grow in
        the wild world of web. Composed of Ericka, Ines, Yann and Marion, the team put their brains
        and their little hearts into action to offer you a Steam tool, pleasant and practical. Feel
        free to follow these 4 brilliant developers on their github and their linkedin profil to see
        their progress! And why not, offer them the job of their dreams
      </p>

      <div className="profil-dev">
        <div className="one-dev">
          <img className="photo-profil" src={ericka} alt="Ericka Barbaux" />
          <p>Ericka</p>
          <a href="https://github.com/Ticka971">Github</a>
          <a href="https://www.linkedin.com/in/ericka-barbaux-659121188">Linkedin</a>
        </div>

        <div className="one-dev">
          <img className="photo-profil" src={ines} alt="Ines Borreill" />
          <p>Ines</p>
          <a href="https://github.com/Borreill">Github</a>
          <a href="https://www.linkedin.com/in/in%C3%A8s-borreill-892724196/">Linkedin</a>
        </div>

        <div className="one-dev">
          <img className="photo-profil" src={yann} alt="" />
          <p>Yann</p>
          <a href="https://github.com/Yann31200">Github</a>
          <a href="">Linkedin</a>
        </div>

        <div className="one-dev">
          <img className="photo-profil" src={marion} alt="Marion Douet" />
          <p>Marion</p>
          <a href="https://github.com/MarionDouet">Github</a>
          <a href="https://www.linkedin.com/in/marion-douet-aaa012189">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default About;
