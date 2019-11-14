import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './KeySteam';
import './FriendInfo.css';

const FriendInfo = props => {
  const { friendId } = props;
  const [player, setPlayer] = useState(0);

  async function getAvatar() {
    await axios
      .get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?`, {
        params: {
          key: config.key,
          steamids: { friendId }
        }
      })
      .then(response => response.data.response.players[0])
      .then(data => {
        console.log(data);
        setPlayer(data);
      });
  }

  useEffect(() => {
    getAvatar();
  }, []);

  return (
    <div className="friendcontainer">
      <div className="left">
        <img className="FriendAvatar" src={player.avatarfull} alt={player.steamid} />
      </div>
      <div className="right">
        <p className="Surname">{player.personaname}</p>
        <p className="ID">{player.steamid}</p>
        <a href={`/players/${player.steamid}`} className="View-profile">
          View profile
        </a>
        <a href={player.profileurl} className="View-profile">
          View profile STEAM
        </a>
      </div>
    </div>
  );
};

export default FriendInfo;
