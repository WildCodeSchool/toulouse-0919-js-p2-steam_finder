import React from 'react';

function AchievementCount({ achievement }) {
  return (
    <div className="achievement-count">
      <p> {achievement.length} Achievements </p>
    </div>
  );
}

export default AchievementCount;
