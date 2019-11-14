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

    <div>
      <p> {achievement.length}</p>
    </div>
  );
}

export default AchievementCount;
