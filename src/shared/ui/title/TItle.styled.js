import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 32px;
  margin-top: 0;
  .span {
    color: var(--color-gray-30);
  }

  @media screen and (min-width: 768px) {
    font-size: 64px;
    letter-spacing: 0.02em;
  }
`;
