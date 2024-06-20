import { useForm } from 'react-hook-form';
import { Button, CustomInput, CustomLink } from 'src/shared/ui';
import EyeOpen from 'src/assets/icons/eye.svg?react';
import EyeClosed from 'src/assets/icons/eye-off.svg?react';
import { StyledForm } from './RegisterForm.styled';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserApi } from 'src/app/api/users';

const schema = yup.object({
  name: yup.string('name nust be a string').min(3).required('name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('email os required'),
  password: yup
    .string()
    .min(7, 'password must be longer than 7 characters')
    .max(30)
    .required(),
});

export default function RegisterForm() {
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
    const resp = await UserApi.regUser(data);
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
        className={errors.name ? 'err userName input' : 'noerr userName input'}
        type={'text'}
        span={'Name:'}
        placeholder={'Ilona Ratushniak'}
        {...register('name')}
      />
      <p className="error-message">{errors.name?.message}</p>
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
            errors.password ? 'err password input' : 'noerr password input'
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
            Registration
          </Button>
        </div>
        <CustomLink href="/login">
          <p className="link">Already have an account?</p>
        </CustomLink>
      </div>
    </StyledForm>
  );
}
