import getPlayerToken from '../services/getPlayerToken';

export const SET_PLAYER = 'SET_PLAYER';
export const SET_PLAYER_TOKEN = 'SET_PLAYER_TOKEN';

export const requestSetPlayer = (payload) => ({
  type: SET_PLAYER,
  payload,
});

export const SetPlayerToken = (payload) => ({
  type: SET_PLAYER_TOKEN,
  payload,
});

export const getToken = () => async (dispatch) => {
  try {
    const token = await getPlayerToken();
    console.log(token);
    dispatch(SetPlayerToken(token));
  } catch (err) {
    console.log(err);
  }
};
