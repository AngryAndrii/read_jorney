import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  .under-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    column-gap: 10px;
    font-family: 'GilroyBold';
    font-size: 14px;
  }

  .button-wrapper {
    width: 140px;
    height: 42px;
  }

  .link {
    font-size: 12px;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 375px) {
    .link {
      white-space: nowrap;
    }
  }
`;
