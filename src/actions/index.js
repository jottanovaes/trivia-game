import getPlayerToken from '../services/getPlayerToken';
import fetchTrivia from '../services/fetchTrivia';

export const SET_PLAYER = 'SET_PLAYER';
export const SET_PLAYER_TOKEN = 'SET_PLAYER_TOKEN';
export const SET_TRIVIA = 'SET_TRIVIA';
export const SET_TIME = 'SET_TIME';
export const RESET_TIME = 'RESET_TIME';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SET_SCORE = 'SET_SCORE';

export const requestSetPlayer = (payload) => ({
  type: SET_PLAYER,
  payload,
});

export const setScore = (payload) => ({
  type: SET_SCORE,
  payload,
});

export const SetPlayerToken = (payload) => ({
  type: SET_PLAYER_TOKEN,
  payload,
});

export const getToken = () => async (dispatch) => {
  try {
    const token = await getPlayerToken();
    dispatch(SetPlayerToken(token));
  } catch (err) {
    console.log(err);
  }
};

export const setTrivia = (payload) => ({
  type: SET_TRIVIA,
  payload,
});

export const getTrivia = (token) => async (dispatch) => {
  try {
    const questions = await fetchTrivia(token);
    console.log(questions);
    dispatch(setTrivia(questions));
  } catch (error) {
    console.log(error);
  }
};

export const elapsedTime = () => ({
  type: SET_TIME,
});

export const resetTime = () => ({
  type: RESET_TIME,
});

export const selectAnswer = (payload) => ({
  type: SELECT_ANSWER,
  payload,
});
