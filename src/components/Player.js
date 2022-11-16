import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setCurrentSong, songs }) => {
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [songVolume, setSongVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Event Handlers
  const playSongHandler = () => {
    if (!isPlaying) {
      setIsPlaying(!isPlaying);

      //control volume
      audioRef.current.volume = 0.1;
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  /* Tutaj bardzo upraszający wszystko kod. We wszystkich miejscach w aplikacji wystarczy 
     ze będziesz operował isPlaying, a ten useEffect będzie odpalał/zatrzymywał player zależnie od jego wartości. */
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  const convertTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const volumeHandler = (e) => {
    audioRef.current.volume = e.target.value / 100;
    setSongVolume(e.target.value);
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      const index = (currentIndex + 1) % songs.length;
      setCurrentSong(songs[index]);
    } else if (direction === "skip-back") {
      const index =
        currentIndex === 0
          ? songs.length - 1
          : (currentIndex - 1) % songs.length;
      setCurrentSong(songs[index]);
    }
  };

  const songEndHandler = () => {
    skipTrackHandler("skip-forward");
  };
  // Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const sliderGradient = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{convertTime(songInfo.currentTime)}</p>
        <div style={sliderGradient} className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? convertTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="volume-control">
        <FontAwesomeIcon icon={faVolumeHigh} />
        <input min={0} max={100} onChange={volumeHandler} type="range" />
        <p>{`${songVolume}%`}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}></audio>
    </div>
  );
};

export default Player;
