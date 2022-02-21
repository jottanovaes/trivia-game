import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { requestSetPlayer } from '../actions';
import { StyledButton, StyledRankingButton,
  StyledFeedbackDiv } from './styles';

class Feedback extends React.Component {
  handleClick = () => {
    const { payload, history } = this.props;
    payload({ score: 0, assertions: 0 });
    history.push('/');
  };

  render() {
    const { score, assertions, history } = this.props;
    const magicNumber = 3;
    const message = assertions >= magicNumber ? 'Well Done!' : 'Could be better...';

    return (
      <>
        <Header />
        <StyledFeedbackDiv>
          <section>
            <h1 data-testid="feedback-text">{message}</h1>
          </section>
          <section>
            <h2>
              Score:
              {' '}
              <span data-testid="feedback-total-score">{score}</span>
            </h2>
          </section>
          <section>
            <h2>
              Assertions:
              {' '}
              <span data-testid="feedback-total-question">{assertions}</span>
            </h2>
          </section>
          <StyledButton
            type="button"
            onClick={ this.handleClick }
            data-testid="btn-play-again"
          >
            Play Again
          </StyledButton>
          <StyledRankingButton
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            Ranking
          </StyledRankingButton>
        </StyledFeedbackDiv>
      </>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  payload: (payload) => dispatch(requestSetPlayer(payload)),
});

const mapStateToProps = ({ player: { score, assertions } }) => ({
  score,
  assertions,
});
export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
