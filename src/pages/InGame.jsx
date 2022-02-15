import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrivia } from '../actions';
import fetchTrivia from '../services/fetchTrivia';

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
    const questions = await fetchTrivia();
    if (questions.response_code) === 3 {
      
    }
    const { loaded } = this.state;
    if (!loaded) {
      this.setState({
        loaded: true,
        questions,
      });
    }
  }

  render() {
    const { questions } = this.state;
    return (
      <h1>Em jogo...</h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(getTrivia(token)),
});

const mapStateToProps = (state) => ({
  questions: state.trivia,
});

export default connect(mapStateToProps, mapDispatchToProps)(InGame);

InGame.propTypes = {
  payload: PropTypes.func,
  questions: PropTypes.objectOf,
}.isRequired;
