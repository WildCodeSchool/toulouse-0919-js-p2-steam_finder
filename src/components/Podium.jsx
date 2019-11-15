import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from './KeySteam';
import GamesForPodium from './GamesForPodium';
import './Podium.css';

const Podium = () => {
  const { id } = useParams();
  const [topGames, setTopGames] = useState(0);

  async function getTopGames() {
    await axios
      .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?`, {
        params: {
          key: config.key,
          steamid: id,
          include_appinfo: true
        }
      })
      .then(response => response.data.response.games)
      .then(data => {
        if (data) {
          const topArray = data.map(top => ({
            appid: top.appid,
            playtime_forever: top.playtime_forever,
            name: top.name,
            img_logo_url: top.img_logo_url
          }));

          const sortedByTime = topArray.sort(function(a, b) {
            return b.playtime_forever - a.playtime_forever;
          });

          const goodTop = [];
          for (let i = 0; i < 3; i++) {
            goodTop.push(sortedByTime[i]);
          }

          setTopGames(goodTop);
        }
      })

      .catch(() => setTopGames(null));
  }

  useEffect(() => {
    getTopGames();
  }, []);
  const displayTopGames = topGames ? (
    <GamesForPodium listForPodium={topGames} />
  ) : (
    'No top games accessibility'
  );

  return (
    <div className="sectionPodium">
      <h1 className="titlePodium">Top Games</h1>
      <div>
        <div className="podiumOfTop">{displayTopGames}</div>
      </div>
    </div>
  );
};

export default Podium;
