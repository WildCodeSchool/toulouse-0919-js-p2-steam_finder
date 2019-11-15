import React from 'react';
import './GamesForPodium.css';

const GamesForPodium = ({ listForPodium }) =>
  listForPodium.map(pod => (
    <div className="GamesOfTop">
      <img
        alt={pod.name}
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${pod.appid}/${pod.img_logo_url}.jpg`}
      />
      <p className="namePodium">{pod.name}</p>
      <p className="timePodium">
        <span>{pod.playtime_forever}</span> minutes{' '}
      </p>
    </div>
  ));

export default GamesForPodium;
