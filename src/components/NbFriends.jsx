import React from 'react';
import './NbFriends.css';

// eslint-disable-next-line react/prop-types
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
      <button className="FriendsButton" type="button">
        {nbfriends} friends
      </button>
    </div>
  );
}

export default NbFriends;
