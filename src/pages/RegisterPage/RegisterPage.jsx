import { Container } from 'src/shared';
import { Phone } from 'src/widgets/phone/Phone';
import { Register } from 'src/widgets/register/Register';
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
