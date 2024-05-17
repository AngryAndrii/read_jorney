import { StyledInput } from './Input.styled';

export const CustomInput = ({ placeholder, span, ...inputProps }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      span={span}
      {...inputProps}
    ></StyledInput>
  );
};
