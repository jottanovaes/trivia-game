import { SET_TIME } from '../actions';

const INITIAL_STATE = { time: 30 };

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TIME:
    return { ...state, time: state.time && state.time - 1 };
  default:
    return state;
  }
};

export default timeReducer;
