import React from 'react';
import './GamesList.css';

const GamesList = ({ ownedGames }) =>
  ownedGames.map(game => (
    <div key={ownedGames.name} className="OneGame">
      <button className="gameButton" type="button">
        <img
          className="imgGame"
          alt={game.name}
          src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`}
        />
      </button>
      <p className="GameName">{game.name}</p>
    </div>
  ));

export default GamesList;
