// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import PlayerProfil from './PlayerProfil';
// import config from './KeySteam';

const Players = () => {
  const { id } = useParams();
  const [players, setPlayers] = useState(0);
  const [redirection, setRedirection] = useState(false);

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
        if (data) {
          setPlayers(data);
        } else {
          setRedirection(true);
        }
      });
  }
  useEffect(getPlayers);

  return (
    <div>
      <PlayerProfil players={players} />
      {redirection ? 'on' : 'off'}
    </div>
  );
};
// export default Players;
