import React      from "react";
import Player     from "./Player";
import playerData from "../data/PlayerData";
// import playerData from "../data/PlayerData";


function PlayerList(props) {
  // const onePlayer = props.playerData[0];

  const players = props.playerData.map((player) => {
    return (
      <Player
        key      ={player.gamerTag}
        gamerTag ={player.gamerTag}
        firstName={player.firstName}
        lastName ={player.lastName}
        wins     ={player.wins}
      />
    )
  })

   return (
    <section className="PlayerList">
      <h1>Currently participating players</h1>
      { players }
    </section>
   );
}

export default PlayerList;

// import matchData  from "../data/MatchData";

 // console.log("Props:", props); this found issue about ln 9