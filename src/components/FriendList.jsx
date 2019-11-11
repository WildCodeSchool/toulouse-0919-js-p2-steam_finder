import React from 'react';
import './FriendList.css';

const FriendList = ({ DisplayFriends }) =>
  DisplayFriends.map(friends => (
    <div className="OneFriend">
      <p className="FriendName">ID: {friends.steamid}</p>
      <a href={`https://steamcommunity.com/profiles/${friends.steamid}/`}>View profile</a>
    </div>
  ));

export default FriendList;
