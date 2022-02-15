import { SET_TRIVIA } from '../actions';

const INITIAL_STATE = {
  response_code: 3,
  results: [],
};

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TRIVIA:
    return { ...action.payload };
  default:
    return state;
  }
};

export default triviaReducer;
