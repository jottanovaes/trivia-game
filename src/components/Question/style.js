import styled from 'styled-components';

export const StyledQuestionsDiv = styled.div`
  display: grid;
  gap: 1vh;
  justify-content: center;
  justify-items: center;
  /* grid-template-columns: auto auto; */
  /* grid-template-columns: repeat(2, 1fr) */
  grid-auto-columns: clamp(300px, 33%, 50%);
`;

export const StyledQuestion = styled.h1`
  font-size: clamp(20px, 1.5em, 2em);
  font-weight: bold;
`;
