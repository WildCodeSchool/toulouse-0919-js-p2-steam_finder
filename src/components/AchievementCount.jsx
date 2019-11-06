import React from 'react';

function AchievementCount({ achievement }) {
  return (
    <div>
      <p> Achievements: {achievement.length}</p>
    </div>
  );
}

export default AchievementCount;
