import React from 'react';
import PropTypes from 'prop-types';

export default class NextBtn extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" data-testid="btn-next" onClick={ () => handleClick() }>
        Próxima
      </button>
    );
  }
}

NextBtn.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
