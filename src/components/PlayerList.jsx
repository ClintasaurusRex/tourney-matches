import React      from "react";
import playerData from "../data/PlayerData";
import matchData  from "../data/MatchData";
import Player     from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  const playerDataArray  = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData)
  console.log('Parsed Player Data:', parsedPlayerData)

   return (
    <section className="PlayerList">
      <h1>Currently participating players</h1>
      <Player />
    </section>
   );
}

export default PlayerList;