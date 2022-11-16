import React, { useCallback } from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, currentSongId, setCurrentSong, libraryStatus }) => {
  const songSelectHandler = useCallback(
    (song) => setCurrentSong(song),
    [setCurrentSong]
  );
  console.log(songs)
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Songs library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            isActive={song.id === currentSongId}
            onSongSelect={() => songSelectHandler(song)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
