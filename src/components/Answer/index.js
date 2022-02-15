import React from 'react';
import PropTypes from 'prop-types';

export default class Answer extends React.Component {
  render() {
    const { answer, testid } = this.props;
    return (
      <button type="button" data-testid={ testid }>
        {answer}
      </button>);
  }
}

Answer.propTypes = {
  answer: PropTypes.string,
  nextQuestion: PropTypes.func,
}.isRequired;
