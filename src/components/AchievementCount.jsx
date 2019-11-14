import React from 'react';
import Achieved from '../images/Achieved.png';

function AchievementCount({ achievement }) {
  if (achievement === 'error') {
    return (
      <div className="error-message">
        Sorry, you cannot access to the number of achievements of this profile
      </div>
    );
  }
  return (
    <div className="achievement-count">
      <button className="avatar_Button">
        <img src={Achieved} className="avatar-image" />
        <p> {achievement.length} Achievements </p>
      </button>
    </div>
  );
}

export default AchievementCount;
