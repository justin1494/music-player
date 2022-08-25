import React, { useState } from "react";
import "./styles/app.scss";

// components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// import Util
import data from "./util";

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
