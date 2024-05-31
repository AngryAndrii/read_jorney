import RegisterForm from '../../features/registerForm/RegisterForm';
import { Logo } from '../../shared/ui/';
import { Title } from '../../shared/ui/';
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
