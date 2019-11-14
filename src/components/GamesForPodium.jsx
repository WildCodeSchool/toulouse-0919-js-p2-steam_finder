import React from 'react';

const GamesForPodium = ({ listForPodium }) =>
  listForPodium.map(pod => (
    <div className="GamesOfTop">
      <img
        alt={pod.name}
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${pod.appid}/${pod.img_logo_url}.jpg`}
      />
      <p>{pod.name}</p>
      <p>{pod.playtime_forever} minutes </p>
    </div>
  ));

export default GamesForPodium;
