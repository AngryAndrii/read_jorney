import { Container } from '../../shared';
import { Phone } from '../../widgets/phone/Phone';
import { Register } from '../../widgets/register/Register';

export const RegisterPage = () => {
  return (
    <Container>
      <Register />
      <Phone />
    </Container>
  );
};
