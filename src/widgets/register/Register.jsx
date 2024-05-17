import { Logo } from '../../shared/ui/';
import { Title } from '../../shared/ui/';
import { StyledRegister } from './Register.styled';

export const Register = () => {
  return (
    <StyledRegister>
      <div className="logo">
        <Logo />
      </div>
      <Title />
    </StyledRegister>
  );
};
