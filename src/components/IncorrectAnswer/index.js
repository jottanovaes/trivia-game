import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveScore } from '../../services/saveScore';
import { setScore } from '../../actions';
import { StyledIncorrectAnswerButton } from './style';

class IncorrectAnswer extends React.Component {
  handleClick = () => {
    const { handleAnswer, difficulty } = this.props;
    if (difficulty) {
      // payload(0);
      const { player } = this.props;
      console.log(player);
      saveScore(player);
    }
    handleAnswer();
  }

  render() {
    const { answer, testid, time, className, disabled } = this.props;
    return (
      <StyledIncorrectAnswerButton
        className={ className }
        type="button"
        data-testid={ testid }
        onClick={ () => this.handleClick() }
        disabled={ !(time && !disabled) }
        // https://stackoverflow.com/questions/59480912/how-is-the-nand-gate-implemented-conceptually
      >
        {answer}
      </StyledIncorrectAnswerButton>
    );
  }
}

IncorrectAnswer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(IncorrectAnswer);
