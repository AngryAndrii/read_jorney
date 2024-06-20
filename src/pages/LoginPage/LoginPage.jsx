import { Container } from 'src/shared';
import { Login } from 'src/widgets/login/Login';
import { Phone } from 'src/widgets/phone/Phone';
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
