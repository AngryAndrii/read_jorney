import { StyledInput } from './Input.styled';
import React from 'react';

export const CustomInput = React.forwardRef(
  ({ placeholder, span, errors, ...inputProps }, register) => {
    return (
      <StyledInput
        ref={register}
        placeholder={placeholder}
        span={span}
        {...inputProps}
      ></StyledInput>
    );
  }
);
