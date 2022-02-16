import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calculateScore, saveScore } from '../../services/saveScore';
import { setScore } from '../../actions';

class Answer extends React.Component {
  handleClick = () => {
    const { handleAnswer, difficulty, time, payload } = this.props;
    if (difficulty) {
      payload(calculateScore(difficulty, time));
      const { player } = this.props;
      saveScore(player);
    }
    handleAnswer();
  }

  render() {
    const { answer, testid, time } = this.props;
    return (
      <button
        type="button"
        data-testid={ testid }
        onClick={ () => this.handleClick() }
        disabled={ !time }
      >
        {answer}
      </button>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.string,
  nextQuestion: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ game: { time }, player }) => ({
  time,
  player,
});

const mapDispatchToProps = (dispatch) => ({
  payload: (score) => dispatch(setScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
