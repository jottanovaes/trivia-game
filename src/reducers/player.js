import { SET_PLAYER, SET_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PLAYER:
    return { ...state, ...action.payload };
  case SET_SCORE:
    return { ...state,
      score: state.score + action.payload,
      assertions: state.assertions + 1 };
  default:
    return state;
  }
};

export default playerReducer;
