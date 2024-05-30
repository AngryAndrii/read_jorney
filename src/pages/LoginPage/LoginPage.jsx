import { Container } from '../../shared';
import { Login } from '../../widgets/login/Login';
import { Phone } from '../../widgets/phone/Phone';
import { StyledWrapper } from './LoginPage.style';

export const LoginPage = () => {
  return (
    <Container>
      <StyledWrapper>
        <Login />
        <Phone />
      </StyledWrapper>
    </Container>
  );
};
