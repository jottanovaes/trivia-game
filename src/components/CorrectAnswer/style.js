import styled, { keyframes } from 'styled-components';
import { ButtonAnimation } from '../../pages/styles';

export const ButtonAnimationRed = keyframes`
  from { box-shadow: 0 0 0.5vw #2fc18c, 0 0 1vw #2fc18c, 0 0 1.5vw #2fc18c; }
  to { box-shadow: 0 0 1.5vw #3effb8,0 0 1vw #2fc18c, 0 0 0.5vw #2fc18c; }
`;

export const StyledCorrectAnswerButton = styled.button`
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
    animation: ${ButtonAnimation} 1s ease-in-out infinite alternate;
    background-color: #2fc18c;
    border: solid 3px rgb(6, 240, 15);
    box-shadow: 0 0 3vw #3effb8;
    color: white;
  }

  &:hover:enabled {
    cursor: pointer;
  }
`;
