import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import AchievementCount from './AchievementCount';
import './NbGames.css';
import Trophy from '../images/trophy.png';

const TotalAchievements = props => {
  const { appidGame } = props;
  const { id } = useParams();
  const [achievements, setAchievements] = useState(0);

  async function GetAchievements() {
    await axios
      .get(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/`, {
        params: {
          appid: appidGame,
          key: config.key,
          steamid: id
        }
      })
      .then(response => response.data.playerstats.achievements)
      .then(data => {
        console.log(data);
        if (data) {
          const newArr = data.filter(achievement => achievement.achieved);
          setAchievements(newArr);
        }
      })
      .catch(() => setAchievements(null));
  }
  useEffect(() => GetAchievements(), []);
  const displayAchievements = achievements ? <AchievementCount achievement={achievements} /> : null;
  const styleAchivied = displayAchievements ? 'avatar-image' : 'avatar-off';
  const styleButton = displayAchievements ? 'avatar-button' : 'avatar-off';

  return (
    <div className={styleButton}>
      <img src={Trophy} className={styleAchivied} />
      {displayAchievements}
    </div>
  );
};

export default TotalAchievements;
