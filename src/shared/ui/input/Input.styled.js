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
    padding-left: ${props => {
      {
        if (props.children[0].props.type == 'text') {
          return '59px';
        } else if (props.children[0].props.type == 'email') {
          return '49px';
        }
        return '78px';
      }
    }};
  }

  .span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    font-size: 14px;
  }

  &:hover {
    outline: 1px solid rgba(249, 249, 249, 0.1);
  }
`;
