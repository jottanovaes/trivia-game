import React from 'react';
import PropTypes from 'prop-types';
import Answer from '../Answer';

const SORT = 0.5;

export default class Question extends React.Component {
  htmlDecode = (input) => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  };

  renderAnswers = (result) => {
    const incorrect = result.incorrect_answers.map((answer, index) => (
      <Answer
        answer={ answer }
        key={ index }
        data-testid={ `wrong-answer-${index}` }
        htmlDecode={ this.htmlDecode }
      />
    ));
    const correct = (<Answer
      answer={ result.correct_answer }
      key="correct"
      data-testid="correct-answer"
      htmlDecode={ this.htmlDecode }
    />);

    const arrayAnswers = [...incorrect, correct];

    // https://css-tricks.com/snippets/javascript/shuffle-array/
    const resultado = arrayAnswers.sort(() => SORT - Math.random());

    return resultado;
  }

  render() {
    const { category, question, result } = this.props;
    return (
      <div className="questions">
        <h1 data-testid="question-category">{`${category}`}</h1>
        {this.htmlDecode(`<p data-testid='question-text'>${question}</p>`)}
        {this.renderAnswers(result)}
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;
