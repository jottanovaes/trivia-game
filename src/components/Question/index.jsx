import React from 'react';
import PropTypes from 'prop-types';
import Answer from '../Answer';
import NextBtn from '../NextBtn';

const SORT = 0.5;

export default class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      answerIsSelected: false,
    };
  }

  htmlDecode = (input) => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  };

  renderAnswers = (result) => {
    const incorrect = result.incorrect_answers.map((answer, index) => (
      <Answer
        answer={ answer }
        key={ index }
        testid={ `wrong-answer-${index}` }
        htmlDecode={ this.htmlDecode }
        handleAnswer={ () => this.handleAnswer() }
      />
    ));
    const correct = (
      <Answer
        answer={ result.correct_answer }
        key="correct"
        testid="correct-answer"
        htmlDecode={ this.htmlDecode }
        handleAnswer={ () => this.handleAnswer() }
      />
    );

    const arrayAnswers = [...incorrect, correct];

    // https://css-tricks.com/snippets/javascript/shuffle-array/
    const resultado = arrayAnswers.sort(() => SORT - Math.random());

    return resultado;
  };

  handleAnswer() {
    this.setState((prevState) => ({
      answerIsSelected: !prevState.answerIsSelected,
    }));
  }

  handleNext() {
    const { nextQuestion } = this.props;
    this.handleAnswer();
    nextQuestion();
  }

  render() {
    const { category, question, result } = this.props;
    const { answerIsSelected } = this.state;

    return (
      <div className="questions">
        <h1 data-testid="question-category">{`${category}`}</h1>
        <p data-testid="question-text">{question}</p>
        <div data-testid="answer-options">
          {this.renderAnswers(result)}
          {answerIsSelected && (
            <NextBtn handleClick={ () => this.handleNext() } />
          )}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;
