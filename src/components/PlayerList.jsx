import React from "react";
import Player from "./Player";

function PlayerList() {
   return (
    <section className="PlayerList">
      <h1>Currently participating players</h1>
      <Player />
    </section>
   );
}

export default PlayerList;