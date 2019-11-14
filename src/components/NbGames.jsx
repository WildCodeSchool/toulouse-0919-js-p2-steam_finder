import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './NbGames.css';
import Gameprofil from '../images/Game-profil.png';

// eslint-disable-next-line react/prop-types
function NbGames({ nbgames }) {
  const { id } = useParams();

  return (
    <div className="Games">
      <NavLink className="linkGames" to={`/games/${id}`}>
        <button className="avatar_Button" type="submit">
          <img src={Gameprofil} className="avatar-image" />
          {nbgames} games
        </button>
      </NavLink>
    </div>
  );
}

export default NbGames;
