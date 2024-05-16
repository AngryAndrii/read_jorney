import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-back);
  padding: auto;
  border: 1px solid red;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;
