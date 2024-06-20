import RegisterForm from 'src/features/registerForm/RegisterForm';
import { Logo } from 'src/shared/ui/';
import { Title } from 'src/shared/ui/';
import { StyledRegister } from './Register.styled';

export const Register = () => {
  return (
    <StyledRegister>
      <div className="logo">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <span className="logo-text title">read journey</span>
      </div>
      <Title />
      <RegisterForm />
    </StyledRegister>
  );
};
