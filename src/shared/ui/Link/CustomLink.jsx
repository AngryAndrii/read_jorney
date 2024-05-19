import { StyledLink } from './CustomLink.style';

export const CustomLink = ({ children, href }) => {
  return <StyledLink to={href}>{children}</StyledLink>;
};
