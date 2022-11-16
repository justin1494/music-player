import React, { useMemo, useState } from "react";
import "./styles/app.scss";

// components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

// import Util
import getSongs from "./data";

function App() {
  const songs = useMemo(() => getSongs(), []);
  console.log(songs);
  // state
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const toggleLibraryStatus = () => setLibraryStatus(!libraryStatus);
  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav toggleLibraryStatus={toggleLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        currentSongId={currentSong.id}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
