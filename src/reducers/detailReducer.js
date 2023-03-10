const initialState = {
  detail: {},
  screen: {},
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_DETAIL':
      return {
        ...state,
        detail: action.payload.detail,
        screen: action.payload.screen,
        isLoading: false,
      };
    case 'LOADING_DETAILS':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default detailReducer;
