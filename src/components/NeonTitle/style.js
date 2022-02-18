import styled, { keyframes } from 'styled-components';

export const ContainerAnimation = keyframes`
  from { box-shadow: 0.5vw 0 1vw 1vw #f88e26, inset 0.5vw 0 1vw 1vw #f88e26; }
  to { box-shadow: 0.5vw 0 2vw 1vw #f88e26, inset 0.5vw 0 2vw 1vw #f88e26; }
`;

export const StyledContainer = styled.div`
  align-items: center;
  animation: ${ContainerAnimation} 1s ease-in-out infinite alternate;
  border-radius: 2vw;
  border: 0.75vw solid #f8bc26;
  display: flex;
  flex-direction: column;
  font-family: neon;
  margin: 6vh auto;
  padding: 1vw;
  width: 33.3vw;
`;

const TriviaAnimation = keyframes`
  from { text-shadow: 0 0 1vw #fb4264, 0 0 3vw #fb4264, 0 0 10vw #fb4264; }
  to { text-shadow: 0 0 1vw #f40A35, 0 0 3vw #f40A35, 0 0 10vw #f40a35; }
`;

export const TriviaContainer = styled.div`
  animation: ${TriviaAnimation} 1s ease-in-out infinite alternate;
  color: #fb4264;
  font-family: neon;
  font-size: 5vw;
  font-weight: bold;
`;

const TrybeAnimation = keyframes`
  from { text-shadow: 0 0 1vw #2fc18c, 0 0 3vw #2fc18c, 0 0 10vw #2fc18c; }
  to { text-shadow: 0 0 3vw #3effb8, 0 0 4vw #3effb8; }
`;

export const TrybeContainer = styled.div`
  color: #2fc18c;
  animation: ${TrybeAnimation} 1s ease-in-out infinite alternate;
  font-size: 5vw;
  font-weight: bold;
`;

export default StyledContainer;
