import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import FriendList from './FriendList';
import './DisplayFriendList.css';
import SearchBarFL from './SearchBarFL';

const DisplayFriendList = () => {
  const { id } = useParams();
  const [DisplayFriends, setDisplayFriends] = useState(0);
  async function getFriendList() {
    await axios
      .get(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?`, {
        params: {
          key: config.key,
          steamid: id
        }
      })
      .then(response => response.data.friendslist.friends)
      .then(data => {
        const listItems = data.map(friends => ({
          steamid: friends.steamid
        }));

        setDisplayFriends(listItems);
      });
  }
  useEffect(() => getFriendList(), []);

  /*  const [players, setPlayers] = useState(0);
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
  useEffect(getPlayers, []);
*/

  return (
    <div>
      <h1 className="friendTitle">Friend list</h1>
      <div>
        <SearchBarFL />
      </div>
      <div className="wrapFriends">
        {DisplayFriends && <FriendList DisplayFriends={DisplayFriends} />}
      </div>
    </div>
  );
};

export default DisplayFriendList;
