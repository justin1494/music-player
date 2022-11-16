import React from "react";

const LibrarySong = ({
  song,
  isActive,
  onSongSelect
}) => {

  return (
    <div
      onClick={onSongSelect}
    className={`library-song ${isActive ? "selected" : ""}`}
    >
      <img src={song.cover} alt="song cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
