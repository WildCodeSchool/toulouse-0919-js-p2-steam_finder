import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './NbGames.css';

// eslint-disable-next-line react/prop-types
function NbGames({ nbgames }) {
  const { id } = useParams();

  return (
    <div className="Games">
      <Link className="linkGames" to={`/games/${id}`}>
        <button className="GamesButton" type="submit">
          {nbgames}
          games
        </button>
      </Link>
    </div>
  );
}

export default NbGames;
