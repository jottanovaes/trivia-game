import React from 'react';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
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
      </div>
    );
  }
}

export default Feedback;
