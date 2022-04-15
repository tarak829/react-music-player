import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
  return (
    <StyledSong>
      <div className='song-container'>
        <img src={currentSong.cover} alt={currentSong.name}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </StyledSong>
  );
};

export default Song;

const StyledSong = styled.div`
  .song-container {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    margin-top: 2rem;
    width: 20%;
    border-radius: 50%;
  }

  h2 {
    padding: 3rem 1rem 1rem;
    color: #fff;
  }

  h3 {
    font-size: 1rem;
    color: #fff;
  }

  /* Desktops and laptops ----------- */
  @media only screen and (max-width: 768px) {
    /* Styles */
    .song-container {
      img {
        width: 50%;
      }
    }
  }
`;
