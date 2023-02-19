import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadDetail } from '../actions/detailAction';
import { smallImage } from '../utils';

const Game = ({ gameData }) => {
  const dispatch = useDispatch();
  const stringPathId = gameData.id.toString();

  const loadDetailHandler = (id) => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={() => loadDetailHandler(gameData.id)}>
      <Link to={`/game/${gameData.id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{gameData.name}</motion.h3>
        <p>{gameData.released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          loading='lazy'
          src={smallImage(gameData.background_image, 640)}
          alt={gameData.name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  height: 25rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Game;
