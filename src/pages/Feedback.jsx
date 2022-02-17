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
    const { score, assertions } = this.props;
    const magicNumber = 3;
    const message = (assertions >= magicNumber) ? 'Well Done!' : 'Could be better...';

    return (
      <div>
        <Header />
        <section>
          <h1 data-testid="feedback-text">{message}</h1>
        </section>
        <section>
          <h2>
            Score:
            {' '}
            <span data-testid="feedback-total-score">{score}</span>
          </h2>
        </section>
        <section>
          <h2>
            Assertions:
            {' '}
            <span data-testid="feedback-total-question">{assertions}</span>
          </h2>
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

const mapStateToProps = ({ player: { score, assertions } }) => ({
  score,
  assertions,
});
export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
