import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken, getTrivia, resetTime } from '../actions';
import fetchTrivia from '../services/fetchTrivia';
import Question from '../components/Question';
import Header from '../components/Header';
import Counter from '../components/Counter';

class InGame extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      questions: {},
      currentQuestion: 0,
    };
  }

  async componentDidMount() {
    const { resetCounter } = this.props;
    resetCounter();
    this.getTrivia();
  }

  async getTrivia() {
    let questions = await fetchTrivia();
    const { payload } = this.props;
    if (questions.response_code) {
      await payload();
      questions = await fetchTrivia();
    }
    const { loaded } = this.state;
    if (!loaded) {
      this.setState({
        loaded: true,
        questions,
        currentQuestion: 0,
      });
    }
  }

  nextQuestion() {
    const { resetCounter } = this.props;
    this.setState(
      (prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }),
      () => resetCounter(),
    );
  }

  render() {
    const { questions, currentQuestion } = this.state;
    const { history } = this.props;
    return (
      <>
        <Header />
        {questions.results && (
          <div className="trivia--container">
            <div className="questions">
              <Question
                category={ questions.results[currentQuestion].category }
                question={ questions.results[currentQuestion].question }
                result={ questions.results[currentQuestion] }
                currentQuestion={ currentQuestion }
                history={ history }
                nextQuestion={ () => this.nextQuestion() }
              />
            </div>
            <div className="timer">
              <Counter />
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(getTrivia(token)),
  payload: () => dispatch(getToken()),
  resetCounter: () => dispatch(resetTime()),
});

const mapStateToProps = (state) => ({
  questions: state.trivia,
});

export default connect(mapStateToProps, mapDispatchToProps)(InGame);

InGame.propTypes = {
  payload: PropTypes.func,
  questions: PropTypes.objectOf,
}.isRequired;
