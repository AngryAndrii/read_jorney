import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-30);
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 14px;
`;

export const StyledRegisterButton = styled(StyledButton)`
  background-color: var(--color-secondary);
  color: var(--color-primary);
  padding: 12px 29px;
  &:is(:hover, :focus) {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 54px;
    font-size: 20px;
  }
`;

export const StyledLoginButton = styled(StyledRegisterButton)`
  padding: 12px 45px;
`;

export const StyledBlackButton = styled(StyledButton)`
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 10px 20px;
  @media screen and (min-width: 768px) {
    padding: 14px 28px;
  }
`;
