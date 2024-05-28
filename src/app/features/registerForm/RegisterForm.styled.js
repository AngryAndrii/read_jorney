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

  .pass_cont {
    position: relative;
  }

  .eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 375px) {
    .link {
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 768px) {
    .button-wrapper {
      width: 225px;
      height: 52px;
    }

    .eye {
      right: 18px;
    }
  }
`;
