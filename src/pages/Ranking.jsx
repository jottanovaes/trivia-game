import React from 'react';

class Ranking extends React.Component {
  render() {
    const getLocalStorage = JSON.parse(localStorage.getItem('ranking'));
    const playerRanking = getLocalStorage.sort((a, b) => b.score - a.score);
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <div>
          { playerRanking.map((player, index) => (
            <div key={ index }>
              <img src={ player.gravatarEmail } alt={ player.name } />
              <p data-testid={ `player-name-${index}` }>{ player.name }</p>
              <p data-testid={ `player-score-${index}` }>{ player.score }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Ranking;
