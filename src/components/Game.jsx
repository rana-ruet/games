import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ gameData }) => {
  return (
    <StyledGame>
      <h3>{gameData.name}</h3>
      <p>{gameData.released}</p>
      <img src={gameData.background_image} alt={gameData.name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export default Game;
