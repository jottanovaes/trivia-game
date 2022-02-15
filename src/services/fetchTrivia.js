const QUESTS_ENDPOINT = 'https://opentdb.com/api.php?amount=5&token=';

const fetchTrivia = async () => {
  const token = localStorage.getItem('token');
  const response = await (await fetch(`${QUESTS_ENDPOINT}${token}`)).json();
  return response;
};

export default fetchTrivia;
