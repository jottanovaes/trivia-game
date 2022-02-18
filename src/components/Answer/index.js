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
    const { answer, testid, time, className, disabled } = this.props;
    return (
      <button
        className={ className }
        type="button"
        data-testid={ testid }
        onClick={ () => this.handleClick() }
        disabled={ !(time && !disabled) }
        // https://stackoverflow.com/questions/59480912/how-is-the-nand-gate-implemented-conceptually
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
