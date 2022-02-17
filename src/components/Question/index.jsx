import React from 'react';
import PropTypes from 'prop-types';
import Answer from '../Answer';
import NextBtn from '../NextBtn';
import './style.css';

const SORT = 0.5;

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      answerIsSelected: false,
      resultado: [],
    };
  }

  componentDidMount() {
    this.updateQuestion();
  }

  componentDidUpdate() {
    this.updateQuestion();
  }

  updateQuestion = () => {
    const { resultado } = this.state;
    const { result } = this.props;
    if (!resultado.length) {
      this.renderAnswers(result);
    }
  }

  htmlDecode = (input) => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  };

  renderAnswers = (result) => {
    const { answerIsSelected } = this.state;
    console.log(answerIsSelected);
    const incorrect = result.incorrect_answers.map((answer, index) => (
      <Answer
        className="answer incorrect"
        answer={ answer }
        key={ index }
        testid={ `wrong-answer-${index}` }
        htmlDecode={ this.htmlDecode }
        handleAnswer={ () => this.handleAnswer() }
      />
    ));
    const correct = (
      <Answer
        className="answer correct"
        answer={ result.correct_answer }
        key="correct"
        difficulty={ result.difficulty }
        testid="correct-answer"
        htmlDecode={ this.htmlDecode }
        handleAnswer={ () => this.handleAnswer() }
      />
    );

    const arrayAnswers = [...incorrect, correct];

    // https://css-tricks.com/snippets/javascript/shuffle-array/
    const resultado = arrayAnswers.sort(() => SORT - Math.random());

    this.setState({ resultado });
  };

  handleAnswer() {
    this.setState((prevState) => ({
      answerIsSelected: !prevState.answerIsSelected,
    }));
  }

  handleNext() {
    const { nextQuestion, history, currentQuestion } = this.props;
    const TOTAL_QUESTION = 5;
    this.setState({
      resultado: [],
    });
    this.handleAnswer();
    if (currentQuestion + 1 === TOTAL_QUESTION) {
      history.push('/feedback');
    }
    nextQuestion();
  }

  render() {
    const { category, question } = this.props;
    const { answerIsSelected, resultado } = this.state;

    return (
      <div className="questions">
        <h1 data-testid="question-category">{`${category}`}</h1>
        <p data-testid="question-text">{question}</p>
        <div data-testid="answer-options">
          {!answerIsSelected ? resultado
            .map((answer) => ({ ...answer, props: { ...answer.props, className: '' } }))
            : resultado}
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

export default Question;
