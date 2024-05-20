import { StyledInput } from './Input.styled';
import React from 'react';

export const CustomInput = React.forwardRef(
  ({ placeholder, span, errors, type, ...inputProps }, register) => {
    return (
      <StyledInput>
        <span className="span" type={type}>
          {span}
        </span>
        <input
          className="input"
          type={type}
          ref={register}
          placeholder={placeholder}
          {...inputProps}
        />
      </StyledInput>
    );
  }
);
