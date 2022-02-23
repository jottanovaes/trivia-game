import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NeonTitle from '../components/NeonTitle';
import { requestSetPlayer } from '../actions';
import { StyledButton, StyledPlayerRank, StyledRankingContainer } from './styles';
import { StyledImg } from '../components/Header/style';
import { TrybeContainer } from '../components/NeonTitle/style';

class Ranking extends React.Component {
  handleClick = () => {
    const { payload, history } = this.props;
    payload({ score: 0, assertions: 0 });
    history.push('/');
  };

  render() {
    const getLocalStorage = JSON.parse(localStorage.getItem('Ranking'));
    const playerRanking = getLocalStorage && getLocalStorage
      .sort((a, b) => b.score - a.score);
    return (
      <>
        <NeonTitle />
        <TrybeContainer
          data-testid="ranking-title"
          style={ { fontFamily: 'neon', textAlign: 'center' } }
        >
          Ranking
        </TrybeContainer>
        <StyledRankingContainer>
          {playerRanking
            && playerRanking.map((player, index) => (
              <StyledPlayerRank key={ index }>
                {console.log(player.picture)}
                <StyledImg
                  src={ `http://www.gravatar.com/avatar/${player.picture}` }
                  alt={ player.name }
                />
                <p data-testid={ `player-name-${index}` }>{player.name}</p>
                <p data-testid={ `player-score-${index}` }>{player.score}</p>
              </StyledPlayerRank>
            ))}
          <StyledButton
            type="button"
            data-testid="btn-go-home"
            onClick={ () => this.handleClick() }
            style={ { marginTop: '20px' } }
          >
            Voltar ao Início
          </StyledButton>
        </StyledRankingContainer>
      </>
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
