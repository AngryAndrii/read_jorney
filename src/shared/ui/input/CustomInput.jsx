import { StyledInput } from './Input.styled';

export const CustomInput = ({ children, placeholder }) => {
  return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
};
