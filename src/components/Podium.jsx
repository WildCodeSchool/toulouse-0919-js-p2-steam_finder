import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import GamesForPodium from './GamesForPodium';

const Podium = () => {
  const { id } = useParams();
  const [topGames, setTopGames] = useState(0);

  async function getTopGames() {
    await axios
      .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?`, {
        params: {
          key: config.key,
          steamid: id
        }
      })
      .then(response => response.data.response.games)
      .then(data => {
        console.log(data);
        setTopGames(data);
      });
  }

  useEffect(() => getTopGames(), []);
  return <div>{topGames && <GamesForPodium listForPodium={topGames} />}</div>;
};

export default Podium;
