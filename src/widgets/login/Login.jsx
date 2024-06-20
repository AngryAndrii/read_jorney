import LoginForm from 'src/features/loginForm/LoginForm';
import { Logo } from 'src/shared/ui/';
import { Title } from 'src/shared/ui/';
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
