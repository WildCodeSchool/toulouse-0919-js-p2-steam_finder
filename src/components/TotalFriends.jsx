import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import NbFriends from './NbFriends';

const TotalFriends = () => {
  const { id } = useParams();
  const [nbfriends, setFriends] = useState(0);

  function getFriendsList() {
    axios
      .get(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?`, {
        params: {
          key: config.key,
          steamid: id
        }
      })
      .then(response => response.data.friendslist.friends)
      .then(data => {
        setFriends(data.length);
      })
      .catch(err => {
        setFriends('error');
      });
  }
  useEffect(getFriendsList, []);

  return (
    <div>
      <NbFriends nbfriends={nbfriends} />
    </div>
  );
};

export default TotalFriends;
