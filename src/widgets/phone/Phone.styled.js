import styled from 'styled-components';

export const StyledPhone = styled.div`
  width: 100%;
  padding: 20px 40px 0px 40px;
  background-color: var(--color-primary);
  border-radius: var(--radius-30);
  .image {
    width: 100%;
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 600px;
    padding: 80px 64px;
    padding-bottom: 0;
  }
`;
