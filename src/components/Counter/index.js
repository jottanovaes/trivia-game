import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { elapsedTime } from '../../actions';
import { StyledCounter, CounterWrap } from './style';

class Counter extends React.Component {
  componentDidMount() {
    const { countSecond } = this.props;
    const second = 1000;

    setInterval(() => {
      countSecond();
    }, second);
  }

  render() {
    const { time } = this.props;
    return (
      <section style={ { width: '66%', margin: 'auto', height: '0' } }>
        <CounterWrap className="w3-light-grey w3-tiny">
          <StyledCounter className="w3-container w3-green" time={ time }> </StyledCounter>
        </CounterWrap>
        <p className="time--text" style={ { color: 'transparent' } }>
          Tempo:
          {' '}
          <span className="time--span">{time}</span>
        </p>
      </section>
    );
  }
}

const mapStateToProps = ({ game: { time } }) => ({
  time,
});

const mapDispatchToProps = (dispatch) => ({
  countSecond: () => dispatch(elapsedTime()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

Counter.propTypes = {
  elapsedTime: PropTypes.func,
  time: PropTypes.number,
}.isRequired;
