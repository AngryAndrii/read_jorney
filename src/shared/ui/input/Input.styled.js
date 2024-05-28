import styled from 'styled-components';

export const StyledInput = styled.div`
  position: relative;

  .input {
    background-color: var(--color-gray-dark);
    border: none;
    border-radius: 12px;
    color: var(--color-secondary);
    height: 50px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0);
    padding-top: 14px;
    padding-bottom: 14px;
  }

  ::placeholder {
    color: var(--color-secondary);
  }

  //paddings
  .userName {
    padding-left: 62px;
  }

  .mail {
    padding-left: 49px;
  }

  .password {
    padding-left: 83px;
  }

  .span {
    color: var(--color-gray);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    font-size: 14px;
  }

  &:hover {
    .input.noerr {
      border: 1px solid rgba(249, 249, 249, 0.1);
    }
  }

  .noerr.input:focus-visible {
    outline: 1px solid green;
  }

  .err.input:focus-visible,
  .err {
    outline: 1px solid red;
  }
`;
