import styled from 'styled-components';

const fulltime = 30;
export const StyledCounter = styled.div`
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0px 0 2vw 5px #4caf50;
  height: 5px;
  margin-top: -5px;
  padding: 0;
  width: ${(props) => `${(props.time / fulltime) * 100}%`};
`;
export const CounterWrap = styled.div`
  background-color: transparent !important;
`;
