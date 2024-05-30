import styled from 'styled-components';

export const StyledLogin = styled.div`
  background-color: var(--color-primary);
  border-radius: var(--radius-30);
  color: var(--color-secondary);
  padding: 20px 20px 40px 20px;
  .logo {
    display: inline-flex;
    margin-bottom: 40px;
    column-gap: 4px;
  }

  .logo-text {
    display: none;
    font-size: 18px;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-left: 64px;
    padding-right: auto;
    padding-bottom: auto;

    .logo-wrapper {
      width: 45px;
      height: 17px;
    }

    .logo-text {
      display: block;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    padding: 40px 64px;
  }
`;
