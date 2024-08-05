import playerData from "../data/PlayerData";


export function preparePlayerData() {
  return Object.values(playerData);
}

export function addWinsToPlayers(playerDataArray, matchData) {
  return playerDataArray.map(player => {
    // calculate the number of wins in the matchData
    const currentWins = matchData.reduce((acc, match) => {
      // Add a win if the gamerTag matchs
      if (match.winner === player.gamerTag) {
        return acc += 1;
      } else {
        return acc;
      }
    }, 0);
    player.wins = currentWins;

    return player;
  });
}

// Since we want to export multiple files export default wont work so we do export on each function expression