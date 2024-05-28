import React from 'react';
import { StyledInput } from './Input.styled';

export const CustomInput = React.forwardRef(
  ({ placeholder, span, errors, type, ...inputProps }, register) => {
    return (
      <StyledInput>
        <span className="span" type={type}>
          {span}
        </span>
        <input
          type={type}
          ref={register}
          placeholder={placeholder}
          {...inputProps}
        />
      </StyledInput>
    );
  }
);
