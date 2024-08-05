import './App.css';
import PlayerList from './components/PlayerList';
import MatchList  from './components/MatchList';

function App() {
  return (
    <div className="App">
      <h1>\
      {/* the {" "} ensures that there is always a trailing space after */}
        Tourney Matches{" "}
        <span>Where coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
