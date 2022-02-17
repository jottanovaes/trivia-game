import React from 'react';
import PropTypes from 'prop-types';
import NeonTitle from '../components/NeonTitle';

class Ranking extends React.Component {
  render() {
    const { history } = this.props;
    const getLocalStorage = JSON.parse(localStorage.getItem('ranking'));
    const playerRanking = getLocalStorage
      && getLocalStorage.sort((a, b) => b.score - a.score);
    return (
      <div>
        <NeonTitle />
        <h1 data-testid="ranking-title">Ranking</h1>
        <div>
          {playerRanking && playerRanking.map((player, index) => (
            <div key={ index }>
              <img src={ player.gravatarEmail } alt={ player.name } />
              <p data-testid={ `player-name-${index}` }>{player.name}</p>
              <p data-testid={ `player-score-${index}` }>{player.score}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Voltar ao Início

        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf,
}.isRequired;

export default Ranking;
