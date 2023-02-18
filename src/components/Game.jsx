import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { loadDetail } from '../actions/detailAction';
import { gameDetailsURL, gameScreenshotURL } from '../api';

const Game = ({ gameData }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = (id) => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={() => loadDetailHandler(gameData.id)}>
      <h3>{gameData.name}</h3>
      <p>{gameData.released}</p>
      <img loading='lazy' src={gameData.background_image} alt={gameData.name} />
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
