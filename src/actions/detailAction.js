import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  const gameDetail = await axios.get(gameDetailsURL(id));
  const screenDetail = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: 'GAME_DETAIL',
    payload: {
      detail: gameDetail.data,
      screen: screenDetail.data,
    },
  });
};
