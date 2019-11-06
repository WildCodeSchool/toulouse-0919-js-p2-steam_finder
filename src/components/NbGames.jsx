import React from 'react';
import './NbGames.css';

// eslint-disable-next-line react/prop-types
function NbGames({ nbgames }) {
  return (
    <div className="Games">
      <button className="GamesButton" type="button">
        {nbgames}
        games
      </button>
    </div>
  );
}

export default NbGames;
