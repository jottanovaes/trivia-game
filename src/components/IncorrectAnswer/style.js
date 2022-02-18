import styled, { keyframes } from 'styled-components';

export const ButtonAnimationRed = keyframes`
  from { box-shadow: 0 0 0.5vw #c12f2f, 0 0 1vw #c12f2f, 0 0 1.5vw #c12f2f; }
  to { box-shadow: 0 0 1.5vw #c12f2f,0 0 1vw #c12f2f, 0 0 0.5vw #c12f2f; }
`;

export const StyledIncorrectAnswerButton = styled.button`
  background-color: white;
  border-radius: 4px;
  border: none;
  color: rgb(16, 16, 16);
  font-family: 'Roboto', sans-serif;
  font-size: 2.5vh;
  font-weight: 400;
  height: 42px;
  outline: none;
  width: 25vw;

  &:disabled {
    animation: ${ButtonAnimationRed} 1s ease-in-out infinite alternate;
    background-color: #c12f2f;
    border: solid 3px red;
    box-shadow: 0 0 3vw #3effb8;
    color: white;
  }

  &:hover:enabled {
    cursor: pointer;
  }

`;
