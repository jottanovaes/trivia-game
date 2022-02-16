import { SET_TIME, RESET_TIME } from '../actions';

const INITIAL_STATE = { time: 30 };

const matchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TIME:
    return { ...state, time: state.time && state.time - 1 };
  case RESET_TIME:
    return INITIAL_STATE;
  default:
    return state;
  }
};

export default matchReducer;
