import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
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
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Feedback;
