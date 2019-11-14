import React from 'react';
import './NbFriends.css';
import { useParams, NavLink } from 'react-router-dom';
import person from '../images/friend.png';

function NbFriends({ nbfriends }) {
  const { id } = useParams();
  if (nbfriends === 'error') {
    return (
      <div className="error-message">
        Sorry, you cannot access to the number of friends of this profile
      </div>
    );
  }
  return (
    <div className="Friends">
      <NavLink className="linkFriedns" to={`/friends/${id}`}>
        <button className="avatar_Button" type="button">
          <img className="avatar-image" src={person} alt="avatar friend" />
          {nbfriends} friends
        </button>
      </NavLink>
    </div>
  );
}
export default NbFriends;
