import { useForm } from 'react-hook-form';
import { useState } from 'react';
import EyeOpen from '../../assets/icons/eye.svg?react';
import EyeClosed from '../../assets/icons/eye-off.svg?react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, CustomInput, CustomLink } from '../../shared/ui';
import { StyledForm } from './LoginForm.styled';
import { UserApi } from '../../app/api/users';
import axios from 'axios';

const schema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('email os required'),
  password: yup.string().min(7).max(30).required(),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    console.log(data);
    const resp = await UserApi.loginUser(data);
    return resp;
  };

  const curUser = async () => {
    // const token = localStorage.getItem('token');
    const resp = await UserApi.currentUser();
    console.log(resp);
    return resp;
  };

  const [type, setType] = useState('password');

  const handleEyeClick = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        className={errors.email ? 'err mail input' : 'noerr mail input'}
        type={'email'}
        span={'Mail:'}
        placeholder={'Your@email.com'}
        {...register('email')}
      />
      <p className="error-message">{errors.email?.message}</p>
      <div className="pass_cont">
        <CustomInput
          className={
            errors.pass ? 'err password input' : 'noerr password input'
          }
          type={type}
          span={'Password:'}
          placeholder={'Yourpasswordhere'}
          {...register('password')}
        />
        <span
          className="eye"
          onClick={() => {
            handleEyeClick();
          }}
        >
          {type === 'password' ? <EyeClosed /> : <EyeOpen />}
        </span>
      </div>
      <p className="error-message">{errors.password?.message}</p>

      <div className="under-section">
        <div className="button-wrapper">
          <Button type="submit" variant={'register'}>
            Log in
          </Button>
        </div>
        <CustomLink href="/register">
          <p className="link">Don’t have an account?</p>
        </CustomLink>
        <button
          type="button"
          onClick={() => {
            curUser();
          }}
        >
          curent
        </button>
      </div>
    </StyledForm>
  );
}
