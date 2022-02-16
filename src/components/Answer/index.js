import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Answer extends React.Component {
  render() {
    const { answer, testid, handleAnswer, time } = this.props;
    return (
      <button
        type="button"
        data-testid={ testid }
        onClick={ () => handleAnswer() }
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

const mapStateToProps = ({ game: { time } }) => ({
  time,
});

export default connect(mapStateToProps, null)(Answer);
