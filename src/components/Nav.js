import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <StyledNav>
      <nav className='nav'>
        <h1>Waves</h1>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  .nav {
    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    border: 2px solid rgb(65, 65, 65);
    padding: 0.5rem;
    transition: all 0.5s ease;

    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }

  /* Tablet (portrait and landscape) ----------- */
  @media only screen and (max-width: 768px) {
    /* Styles */
    button {
      z-index: 10;
    }
  }
`;
