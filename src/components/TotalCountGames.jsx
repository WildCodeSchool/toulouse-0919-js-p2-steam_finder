// import React, { useState, useEffect }from 'react';
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import config from './KeySteam'
// import TotalCountGamesFunc from './TotalCountGamesFunc'
// const TotalCountGames = () => {
//   let { id } = useParams();
//   const [counts, setCounts] = useState(0);

//   function getCount() {
//     axios
//       .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?`, {
//         params: {
//           key: config.key,
//           steamid: id,
//         }
//       })
//       .then(response => response.data.response.games[0])
//       .then(data => {
//           setCounts({data})
//       });
//   }
//   useEffect(getCount)

//   return (
//     <div>

//     <TotalCountGamesFunc counts={counts}/>

//     </div>
//   );
// };

// export default TotalCountGames;
