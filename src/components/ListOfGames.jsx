import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import GamesList from './GamesList';
import './ListOfGames.css';

const ListOfGames = () => {
  const { id } = useParams();
  const [ownedGames, setOwnedGames] = useState(0);

  async function getGamesList() {
    await axios
      .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?`, {
        params: {
          key: config.key,
          steamid: id,
          include_appinfo: true
        }
      })
      .then(response => response.data.response.games)
      .then(data => {
        const listItems = data.map(game => ({
          name: game.name,
          appid: game.appid,
          img_logo_url: game.img_logo_url
        }));

        setOwnedGames(listItems);
      });
  }
  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <div className="stylegame" key={ownedGames.appid}>
      <h1 className="gameTitle">Games list</h1>
      <div key={ownedGames.name} className="wrapGames">
        {ownedGames && <GamesList ownedGames={ownedGames} />}
      </div>
    </div>
  );
};

export default ListOfGames;
