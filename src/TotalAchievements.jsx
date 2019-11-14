import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import AchievementCount from './components/AchievementCount';

function TotalAchievements() {
  const { id } = useParams();
  const [achievements, setAchievements] = useState(0);

  function GetAchievements() {
    axios
      .get(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&`, {
        params: {
          key: config.key,
          steamid: id
        }
      })
      .then(response => response.data.playerstats.achievements)
      .then(data => {
        const newArr = data.filter(achievement => achievement.achieved);
        setAchievements(newArr);
      });
  }
  useEffect(() => GetAchievements(), []);

  return <div>{achievements && <AchievementCount achievement={achievements} />}</div>;
}

export default TotalAchievements;
