import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import NbGames from './NbGames';

const TotalGames = () => {
  const { id } = useParams();
  const [nbgames, setGames] = useState(0);

  async function getGames() {
    await axios
      .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?`, {
        params: {
          key: config.key,
          steamid: id
        }
      })
      .then(response => response.data.response.game_count)
      .then(setGames)
      .catch(err => {
        setGames('error');
      });
  }

  useEffect(() => getGames(), []);

  return (
    <div>
      <NbGames nbgames={nbgames} />
    </div>
  );
};
export default TotalGames;
