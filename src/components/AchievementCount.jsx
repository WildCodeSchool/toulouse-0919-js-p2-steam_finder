import React from 'react';

function AchievementCount({ achievement }) {
  return (
    <div>
      <p> {achievement.length}</p>
    </div>
  );
}

export default AchievementCount;
