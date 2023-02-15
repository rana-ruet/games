const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state, popular: action.payload.popular };

    default:
      return { ...state };
  }
};

export default gameReducer;
