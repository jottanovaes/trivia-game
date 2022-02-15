import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken, getTrivia } from '../actions';
import fetchTrivia from '../services/fetchTrivia';
import Question from '../components/Question';
import Header from '../components/Header';

class InGame extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      questions: {},
    };
  }

  async componentDidMount() {
    this.getTrivia();
  }

  async getTrivia() {
    let questions = await fetchTrivia();
    const { payload } = this.props;
    if (questions.response_code) {
      payload();
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

  // nextQuestion() {
  //   this.setState((prevState) => ({
  //     currentQuestion: prevState.currentQuestion + 1,
  //   }));
  // }

  render() {
    const { questions, currentQuestion } = this.state;
    console.log(questions);
    return (
      <>
        <Header />
        <h1>Em jogo...</h1>
        {questions.results && (
          <Question
            category={ questions.results[currentQuestion].category }
            question={ questions.results[currentQuestion].question }
            result={ questions.results[currentQuestion] }
          />
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(getTrivia(token)),
  payload: () => dispatch(getToken()),
});

const mapStateToProps = (state) => ({
  questions: state.trivia,
});

export default connect(mapStateToProps, mapDispatchToProps)(InGame);

InGame.propTypes = {
  payload: PropTypes.func,
  questions: PropTypes.objectOf,
}.isRequired;
