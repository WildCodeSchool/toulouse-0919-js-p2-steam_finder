import React from 'react';
import './NbFriends.css';
import person from '../images/friend.png';

function NbFriends({ nbfriends }) {
  if (nbfriends === 'error') {
    return (
      <div className="error-message">
        Sorry, you cannot access to the number of friends of this profile
      </div>
    );
  }
  return (
    <div className="Friends">
      <button className="avatar_Button" type="button">
        <img className="avatar-image" src={person} alt="avatar friend" />
        {nbfriends} friends
      </button>
    </div>
  );
}
export default NbFriends;
