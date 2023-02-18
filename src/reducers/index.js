import { combineReducers } from 'redux';

import gameReducer from './gameReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  gameDetail: detailReducer,
});

export default rootReducer;
