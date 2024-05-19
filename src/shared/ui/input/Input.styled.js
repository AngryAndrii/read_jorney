import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: var(--color-gray-dark);
  border: none;
  border-radius: 12px;
  color: var(--color-secondary);
  height: 50px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0);

  &:hover {
    outline: 1px solid rgba(249, 249, 249, 0.1);
  }
`;
