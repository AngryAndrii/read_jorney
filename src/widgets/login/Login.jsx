import LoginForm from '../../features/loginForm/LoginForm';
import { Logo } from '../../shared/ui/';
import { Title } from '../../shared/ui/';
import { StyledLogin } from './Login.styled';

export const Login = () => {
  return (
    <StyledLogin>
      <div className="logo">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <span className="logo-text title">read journey</span>
      </div>
      <Title />
      <LoginForm />
    </StyledLogin>
  );
};
