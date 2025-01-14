import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/MatchData';
import playerData from './data/PlayerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';

function App() {

  const playerDataArray  = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData)


  return (
    <div className="App">
      <h1>
      {/* the {" "} ensures that there is always a trailing space after */}
        Tourney Matches{" "}
        <span>Where coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData}/>
      <MatchList  matchData={matchData} />
    </div>
  );
}

export default App;

// import PlayerList from './components/PlayerList';
// import MatchList  from './components/MatchList';
// return (
//   <div className="App">
//     <h1>\
//     {/* the {" "} ensures that there is always a trailing space after */}
//       Tourney Matches{" "}
//       <span>Where coding and Tournaments found their Match!</span>
//     </h1>
//     <PlayerList />
//     <MatchList />
//   </div>