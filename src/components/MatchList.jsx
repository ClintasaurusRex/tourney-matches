import React from "react";
import Match from "./Match";


function MatchList(props) {

  const matches = props.matchData.map((match) => {
    return(
    <Match
      key            ={match.matchNumber}
      players        ={match.players}
      winner         ={match.winner}
      scoreDifference={match.scoreDifference}
     />
    );
  });


  return (
    <section className="PlayerList MatchList">
      <h1>Match List</h1>
      { matches }
    </section>
  )
}

export default MatchList;

// import matchData from "../data/MatchData";

/* <section className="PlayerList MatchList">
      <h1>Match List</h1>
      {/* Matches will be shown here */
      // <Match players={ oneMatch.players }
              // winner={ oneMatch.winner }
              // scoreDifference={oneMatch.scoreDifference}
      // />
    // </section> *