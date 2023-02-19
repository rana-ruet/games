import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useParams } from 'react-router-dom';

import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

function Home() {
  const dispatch = useDispatch();
  const { popular, upcoming, newGames } = useSelector((state) => state.game);
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return (
    <GameList>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>{id && <GameDetail pathId={id} />}</AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game key={game.id} gameData={game} />
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game key={game.id} gameData={game} />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game key={game.id} gameData={game} />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

export default Home;

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
