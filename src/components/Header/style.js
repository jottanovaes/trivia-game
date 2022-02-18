import styled, { keyframes } from 'styled-components';

export const StyledImg = styled.img`
  clip-path: circle(50% at center);
  width: 5vw;
`;

export const StyledPlayerDataR = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const StyledPlayerDataC = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const ContainerAnimation = keyframes`
  from { box-shadow: rgba(25, 85, 229, 0.4) -5px 5px,
    rgba(25, 85, 229, 0.3) -10px 10px, rgba(25, 85, 229, 0.2) -15px 15px; }
  to { box-shadow: rgba(25, 85, 229, 0.2) -15px 15px,
  rgba(25, 85, 229, 0.1) -20px 20px, rgba(25, 85, 229, 0.05) -25px 25px; }
`;

// box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;

export const StyledTopContainer = styled.div`
  align-items: center;
  border-radius: 2vw;
  display: flex;
  flex-direction: column;
  margin: 6vh auto;
  padding: 1vw;
  width: 50%;
`;

// build a card that grows to bottom from middle screenshotOnRunFailure
