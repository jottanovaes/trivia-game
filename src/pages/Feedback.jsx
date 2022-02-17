import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { requestSetPlayer } from '../actions';

class Feedback extends React.Component {
  handleClick = () => {
    const { payload } = this.props;
    payload({ score: 0, assertions: 0 });
  }

  render() {
    const { score } = this.props;
    const getLocalStorage = (localStorage.getItem('state') !== null)
      ? JSON.parse(localStorage.getItem('state'))
      : { player: { assertions: '', score: '' } };
    const { assertions } = getLocalStorage.player;
    const magicNumber = 3;
    const message = (assertions >= magicNumber) ? 'Well Done!' : 'Could be better...';

    return (
      <div>
        <Header />
        <section>
          <h1 data-testid="feedback-text">{message}</h1>
        </section>
        <section>
          <h2 data-testid="feedback-total-score">{score}</h2>
        </section>
        <section>
          <h2 data-testid="feedback-total-question">{assertions}</h2>
        </section>
        <Link to="/">
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="btn-play-again"
          >
            Play Again

          </button>
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({

  payload: (payload) => dispatch(requestSetPlayer(payload)),

});
export default connect(null, mapDispatchToProps)(Feedback);
