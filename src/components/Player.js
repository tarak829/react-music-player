import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setCurrentSong,
  songs,
  setSongs,
}) => {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  // Event Handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  // Add the styles
  const trackanim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <StyledPlayer>
      <div className='player'>
        <div className='time-control'>
          <p>{getTime(songInfo.currentTime)}</p>
          <div
            style={{
              background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
            }}
            className='track'
          >
            <input
              className='slider'
              min={0}
              max={songInfo.duration || 0}
              value={songInfo.currentTime}
              onChange={dragHandler}
              type='range'
            />
            <div style={trackanim} className='animate-track'></div>
          </div>
          <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
        </div>
        <div className='play-control'>
          <FontAwesomeIcon
            onClick={() => skipTrackHandler("skip-back")}
            className='skip-back'
            size='2x'
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            onClick={playSongHandler}
            className='play'
            size='2x'
            icon={isPlaying ? faPause : faPlay}
          />
          <FontAwesomeIcon
            onClick={() => skipTrackHandler("skip-forward")}
            className='skip-forward'
            size='2x'
            icon={faAngleRight}
          />
        </div>
      </div>
    </StyledPlayer>
  );
};

export default Player;

const StyledPlayer = styled.div`
  .player {
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .time-control {
    width: 50%;
    display: flex;
    align-items: center;

    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 15px;
      background: transparent;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .track {
      width: 100%;
      height: 1rem;
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      background: lightblue;
    }

    .animate-track {
      height: 100%;
      width: 100%;
      background: rgb(204, 204, 204);
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(0%);
      pointer-events: none;
    }

    p {
      padding: 1rem;
    }
  }

  .play-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 1rem;
    transition: all 0.2s;

    svg {
      cursor: pointer;
    }
  }

  /* Tablet (portrait and landscape) ----------- */
  @media only screen and (max-width: 768px) {
    /* Styles */
    .time-control {
      width: 90%;
    }

    .play-control {
      width: 60%;
    }
  }
`;
