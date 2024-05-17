import { StyledInput } from './Input.styled';
import React from 'react';

export const CustomInput = React.forwardRef(
  ({ placeholder, span, ...inputProps }, register) => {
    return (
      <StyledInput
        placeholder={placeholder}
        span={span}
        {...inputProps}
      ></StyledInput>
    );
  }
);
