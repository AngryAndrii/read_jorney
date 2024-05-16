import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  border: 1px solid tomato;

  @media screen and (min-width: 1280px) {
    max-width: 1216px;
  }
  @media screen and (max-width: 1279px) {
    max-width: 704px;
  }
  @media screen and (max-width: 768px) {
    max-width: 335px;
  }
`;
