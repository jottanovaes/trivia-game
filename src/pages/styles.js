import styled, { keyframes } from 'styled-components';

export const StyledLoginField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding-top: 2vh;
`;

export const StyledFeedbackDiv = styled.div`
align-items: center;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 8px;
  box-shadow: inset 0 22px 56px -36px rgba(255, 255, 255, 0.5),
    inset 0 4px 5px -4px rgba(255, 255, 255, 1),
    inset 0 -31px 34px -32px rgba(96, 68, 144, 0.3),
    inset 0 39px 50px -34px rgba(202, 172, 255, 0.3),
    inset 0 2px 9px rgba(154, 146, 210, 0.3),
    inset 0 1px 10px rgba(227, 222, 255, 0.2);
  color: #fff;
  display: flex;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  margin: auto;
  padding: 4vh;
  gap: ${(props) => (props.questions && '1vw')};
  transition: 0.3s;
  width: 600px;

  &:hover {
    box-shadow: inset 0 19px 28px -18px rgba(255, 255, 255, 0.5),
      inset 0 4px 6px -3px rgba(255, 255, 255, 1),
      inset 0 -51px 44px -42px rgba(96, 68, 144, 0.3),
      inset 0 59px 60px -32px rgba(202, 172, 255, 0.3),
      inset 0 4px 16px rgba(154, 146, 210, 0.3),
      inset 0 2px 25px rgba(227, 222, 255, 0.23);
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0 22px 56px -36px rgba(255, 255, 255, 0.5),
    0 4px 5px -4px rgba(255, 255, 255, 1),
    0 -31px 34px -32px rgba(96, 68, 144, 0.3),
    0 39px 50px -34px rgba(202, 172, 255, 0.3),
    0 2px 9px rgba(154, 146, 210, 0.3),
    0 1px 10px rgba(227, 222, 255, 0.2);
  border: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 2.5vh;
  font-weight: 700;
  height: 42px;
  outline: none;
  text-indent: 12px;
  width: 25vw;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ButtonAnimation = keyframes`
  from { box-shadow: 0 0 0.5vw #2fc18c, 0 0 1vw #2fc18c, 0 0 1.5vw #2fc18c; }
  to { box-shadow: 0 0 1.5vw #3effb8,0 0 1vw #2fc18c, 0 0 0.5vw #2fc18c; }
`;

export const ButtonRankingAnimation = keyframes`
  from { box-shadow: 0 0 0.5vw #FFFF00, 0 0 1vw #FFFF00, 0 0 1.5vw #FFFF00; }
  to { box-shadow: 0 0 1.5vw #CCCC00,0 0 1vw #2fc18c, 0 0 0.5vw #2fc18c; }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 2.5vh;
  font-weight: 700;
  height: 42px;
  outline: none;
  width: 25vw;

  &:enabled {
    animation: ${ButtonAnimation} 1s ease-in-out infinite alternate;
    background-color: #2fc18c;
    box-shadow: 0 0 3vw #3effb8;
    color: white;
    cursor: pointer;
  }
`;

export const StyledRankingButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: none;
  color: rgba(255, 255, 254, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 2.5vh;
  font-weight: 700;
  height: 42px;
  outline: none;
  width: 25vw;
  margin: 25px;

  &:enabled {
    animation: ${ButtonRankingAnimation} 1s ease-in-out infinite alternate;
    background-color: #FFFF00;
    box-shadow: 0 0 3vw #FFFF00;
    color: #585858;
    cursor: pointer;
  }
`;

// https://www.cssscript.com/demo/neon-glass-cards/
export const StyledInputContainer = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 8px;
  box-shadow: inset 0 22px 56px -36px rgba(255, 255, 255, 0.5),
    inset 0 4px 5px -4px rgba(255, 255, 255, 1),
    inset 0 -31px 34px -32px rgba(96, 68, 144, 0.3),
    inset 0 39px 50px -34px rgba(202, 172, 255, 0.3),
    inset 0 2px 9px rgba(154, 146, 210, 0.3),
    inset 0 1px 10px rgba(227, 222, 255, 0.2);
  color: #fff;
  display: flex;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  margin: auto;
  padding: 4vh;
  gap: ${(props) => (props.questions && '1vw')};
  transition: 0.3s;
  width: ${(props) => (props.questions ? '66%' : '33%')};

  &:hover {
    box-shadow: inset 0 19px 28px -18px rgba(255, 255, 255, 0.5),
      inset 0 4px 6px -3px rgba(255, 255, 255, 1),
      inset 0 -51px 44px -42px rgba(96, 68, 144, 0.3),
      inset 0 59px 60px -32px rgba(202, 172, 255, 0.3),
      inset 0 4px 16px rgba(154, 146, 210, 0.3),
      inset 0 2px 25px rgba(227, 222, 255, 0.23);
  }
`;
