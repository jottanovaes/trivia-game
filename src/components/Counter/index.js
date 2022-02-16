import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { elapsedTime } from '../../actions';

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
      <section>
        <p className="time--text">
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
