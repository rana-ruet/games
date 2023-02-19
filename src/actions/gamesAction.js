import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL);
  const upcomingData = await axios.get(upcomingGamesURL);
  const newGameData = await axios.get(newGamesURL);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGameData.data.results,
    },
  });
};

export const searchedGame = (gameName) => async (dispatch) => {
  const searchData = await axios.get(searchGameURL(gameName));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: searchData.data.results,
  });
};
