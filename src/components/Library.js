import React from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
  return (
    <StyledLibrary>
      <div className={`library ${libraryStatus ? "active-library" : ""}`}>
        <h2>Library</h2>
        <div className='library-songs'>
          {songs.map((song) => (
            <LibrarySong
              isPlaying={isPlaying}
              song={song}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              setSongs={setSongs}
              songs={songs}
              id={song.id}
              key={song.id}
            />
          ))}
        </div>
      </div>
    </StyledLibrary>
  );
};

export default Library;

const StyledLibrary = styled.div`
  .library {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 20rem;
    height: 100%;
    box-shadow: 2px 2px 50px gray;
    overflow: scroll;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
  }
  h2 {
    padding: 2rem;
  }

  .library-song {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all 0.2s;

    img {
      width: 30%;
    }

    &:hover {
      background-color: rgb(220, 222, 255);
    }
  }

  .song-description {
    padding-left: 1rem;

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.7rem;
    }
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  .selected {
    background: rgb(193, 204, 255);
  }

  .active-library {
    transform: translateX(0%);
    opacity: 1;
  }

  /* Tablet (portrait and landscape) ----------- */
  @media only screen and (max-width: 768px) {
    /* Styles */
    .library {
      width: 100%;
    }
  }
`;
