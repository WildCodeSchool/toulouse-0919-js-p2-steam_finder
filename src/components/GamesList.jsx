import React from 'react';
import './GamesList.css';
import TotalAchievements from './TotalAchievements';

const GamesList = ({ ownedGames }) =>
  ownedGames.map(game => (
    <div className="OneGame">
      <div className="style-gamelist">
        <button className="gameButton" type="button">
          <img
            className="imgGame"
            alt={game.name}
            src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`}
          />
        </button>
        <p className="GameName">{game.name}</p>
        <p className="trophy-game">
          {' '}
          {game && <TotalAchievements achievements={game} appidGame={game.appid} />}{' '}
        </p>
      </div>
    </div>
  ));

export default GamesList;
