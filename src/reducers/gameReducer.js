const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POPULAR':
      return { ...state };

    default:
      return { ...state };
  }
};

export default gameReducer;
