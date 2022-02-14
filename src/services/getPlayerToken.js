const PLAYER_TOKEN_API = 'https://opentdb.com/api_token.php?command=request';

const getPlayerToken = async () => {
  const response = await fetch(PLAYER_TOKEN_API);
  const results = await response.json();
  localStorage.setItem('token', results.token);
  return results.token;
};

export default getPlayerToken;
