import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return <h1>Hi From Home</h1>;
}

export default Home;
