import encryptEmail from './encryptEmail';

export const saveScore = ({ name, gravatarEmail, score }) => {
  localStorage.setItem('Ranking', JSON.stringify([{
    name,
    picture: encryptEmail(gravatarEmail),
    score,
  }]));
};

const POINT = 10;
const difficultScore = {
  easy: 1,
  medium: 2,
  hard: 3,
};
// 10 + (timer * dificuldade)

export const calculateScore = (difficulty, time) => POINT
  + (time * difficultScore[difficulty]);
