const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload,
      };
    case 'CLEAR_SEARCHED':
      return {
        ...state,
        searched: [],
      };
    default:
      return state;
  }
};

export default gameReducer;
