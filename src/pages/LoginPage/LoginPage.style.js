import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    column-gap: 16px;
  }
`;
