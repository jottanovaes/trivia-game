import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NeonTitle from '../components/NeonTitle';
import { requestSetPlayer } from '../actions';

class Ranking extends React.Component {
  handleClick = () => {
    const { payload, history } = this.props;
    payload({ score: 0, assertions: 0 });
    history.push('/');
  };

  render() {
    const getLocalStorage = JSON.parse(localStorage.getItem('Ranking'));
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
          onClick={ () => this.handleClick() }
        >
          Voltar ao Início

        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf,
  score: PropTypes.number,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  payload: (payload) => dispatch(requestSetPlayer(payload)),
});

export default connect(null, mapDispatchToProps)(Ranking);
