import {
  StyledBlackButton,
  StyledLoginButton,
  StyledRegisterButton,
} from './Button.styled';

export const Button = ({ children, variant }) => {
  if (variant == 'register') {
    return <StyledRegisterButton>{children}</StyledRegisterButton>;
  } else if (variant == 'black') {
    return <StyledBlackButton>{children}</StyledBlackButton>;
  } else if (variant == 'login') {
    return <StyledLoginButton>{children}</StyledLoginButton>;
  }
};
