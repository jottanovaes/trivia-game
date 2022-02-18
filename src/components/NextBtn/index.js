import React from 'react';
import PropTypes from 'prop-types';
import { TrybeContainer } from '../NeonTitle/style';
import StyledNextButton from './style';

export default class NextBtn extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <StyledNextButton
        type="button"
        data-testid="btn-next"
        onClick={ () => handleClick() }
      >
        <TrybeContainer>
          next
        </TrybeContainer>
      </StyledNextButton>
    );
  }
}

NextBtn.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
