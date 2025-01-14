import React from "react";


function Match(props)  {
  return (
    <article className="Match">
      <h1>{props.players[0]}
      <span>vs</span>
       {props.players[1]}
       </h1>
      {props.winner && <h2>{props.winner} is the winner by
      {props.scoreDifference}</h2>}

      {!props.winner && <h2>No winners yet</h2>}
    </article>
  );
}
/* // replacing <article className="Match">
    //   <h1>Joe <span>vs</span> Bob</h1>
    //   {/* To be shown when there is a winner */
    //   <h2>Joe is the winner by 1!</h2>
    //   {/* To be shown when there is no winner */}
    //   <h2>No winners yet!</h2>
    // </article> */}

export default Match;