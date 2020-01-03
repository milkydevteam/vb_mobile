import * as types from '../reduxType';

const defaultState = {
  user: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};
