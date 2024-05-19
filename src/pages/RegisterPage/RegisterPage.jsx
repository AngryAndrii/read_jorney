import { Container } from '../../shared';
import { Phone } from '../../widgets/phone/Phone';
import { Register } from '../../widgets/register/Register';
import { StyledWrapper } from './RegisterPage.style';

export const RegisterPage = () => {
  return (
    <Container>
      <StyledWrapper>
        <Register />
        <Phone />
      </StyledWrapper>
    </Container>
  );
};
