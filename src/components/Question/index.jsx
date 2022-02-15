import React from 'react';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
  render() {
    console.log(this.props);
    const { category, question } = this.props;
    return (
      <div className="questions">
        <h1 data-testid="question-category">{category}</h1>
        <h2 data-testid="question-text">{question}</h2>
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;
