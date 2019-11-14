import React from 'react';
import './PlayerProfil.css';

function PlayerProfil({ players }) {
  return (
    <div className="PlayerProfil">
      <img className="avatarPlayer" src={players.avatarfull} alt={players.personaname} />
      <h1 className="PlayerName">{players.personaname} 's profile</h1>
      <p className="textProfil">Id Steam: {players.steamid}</p>
      <p className="textProfil">Pseudo: {players.personaname}</p>
      <p>Country: {players.loccountrycode}</p>
      <a href={players.profileurl}>View profil Steam</a>
    </div>
  );
}

export default PlayerProfil;
