const initialState = {
  detail: {},
  screen: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_DETAIL':
      return {
        ...state,
        detail: action.payload.detail,
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
