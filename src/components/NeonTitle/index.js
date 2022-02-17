import React from 'react';
import { StyledContainer, TriviaContainer, TrybeContainer } from './style';

class NeonTitle extends React.Component {
  render() {
    return (
      <StyledContainer>
        <TriviaContainer>trivia</TriviaContainer>
        <TrybeContainer>trybe</TrybeContainer>
      </StyledContainer>
    );
  }
}

export default NeonTitle;
