import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlayerProfil from './PlayerProfil';
import axios from 'axios';
import config from './KeySteam';

const Players = () => {
  let { id } = useParams();
  const [players, setPlayers] = useState(0);

  function getPlayers() {
    axios
      .get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?`, {
        params: {
          key: config.key,
          steamids: id
        }
      })
      .then(response => response.data.response.players[0])
      .then(data => {
        setPlayers(data);
      });
  }
  useEffect(getPlayers);

  return (
    <div>
      <PlayerProfil players={players} />
    </div>
  );
};
export default Players;
