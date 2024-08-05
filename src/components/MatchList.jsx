import React from "react";
import Match from "./Match";

function MatchList() {
  return (
    <article className="PlayerList MatchList">
      <h1>Match List</h1>
      {/* Matches will be shown here */}
      <Match />
    </article>
  )
}

export default MatchList;