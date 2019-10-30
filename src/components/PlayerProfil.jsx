import React from 'react';
import './PlayerProfil.css';

function PlayerProfil({ players }) {
  return (
    <div className="PlayerProfil">
      <h1>{players.personaname}'s profile</h1>
      <img className="avatarPlayer" src={players.avatarfull} alt={players.personaname} />
      <p className="textProfil">
        Id Steam:
        {players.steamid}
      </p>
      <p className="textProfil">
        Pseudo:
        {players.personaname}
      </p>
      <a href={players.profileurl}>View profil Steam</a>
      <p>Country:{players.loccountrycode}</p>
    </div>
  );
}

export default PlayerProfil;
