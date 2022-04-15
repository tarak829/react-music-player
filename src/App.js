import React, { useRef, useState } from "react";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import util
import data from "./data";
import styled from "styled-components";

function App() {
  // Ref
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <StyledApp
      style={{
        background: `linear-gradient(160deg, ${currentSong.color[0]} 0%, ${currentSong.color[1]} 100%)`,
      }}
    >
      <div className={`App ${libraryStatus ? "library-active" : ""}`}>
        <Nav libraryStatus={libraryStatus} currentSong={currentSong} setLibraryStatus={setLibraryStatus} />
        <Song currentSong={currentSong} />
        <Player
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          songs={songs}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
        />
        <Library
          libraryStatus={libraryStatus}
          songs={songs}
          audioRef={audioRef}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
        <audio
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={songEndHandler}
        ></audio>
      </div>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
  .App {
    transition: all 0.5s ease;
  }

  .library-active {
    margin-left: 30%;
  }
`;
