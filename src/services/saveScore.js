import encryptEmail from './encryptEmail';

const updatePlayer = (players, currentPlayer) => {
  const update = players.some(
    ({ picture }) => picture === currentPlayer.picture,
  );

  return update
    ? players.map((player) => {
      if (player.picture === currentPlayer.picture) {
        return { ...player, score: player.score + currentPlayer.score };
      }
      return player;
    })
    : [...players, currentPlayer];
};

export const saveScore = ({ name, gravatarEmail, score }) => {
  const currentPlayer = {
    name,
    picture: encryptEmail(gravatarEmail),
    score,
  };
  const previousPlayers = JSON.parse(localStorage.getItem('Ranking'));

  const players = previousPlayers
    ? updatePlayer(previousPlayers, currentPlayer)
    : [currentPlayer];
  localStorage.setItem('Ranking', JSON.stringify(players));
};

const POINT = 10;
const difficultScore = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export const calculateScore = (difficulty, time) => POINT
  + (time.toFixed(0) * difficultScore[difficulty]);
