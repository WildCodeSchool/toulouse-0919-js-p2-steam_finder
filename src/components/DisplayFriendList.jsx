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
        setDisplayFriends(data);
      });
  }
  useEffect(() => {
    getFriendList();
  }, []);

  return (
    <div className="stylepage">
      <h1 className="friendTitle">Friend list</h1>
      <div>
        <SearchBarFL />
      </div>
      <div key={DisplayFriends.friends} className="wrapFriends">
        {DisplayFriends && <FriendList Friends={DisplayFriends} />}
      </div>
    </div>
  );
};

export default DisplayFriendList;
