import { useForm } from 'react-hook-form';
import { Button, CustomInput, CustomLink } from '../../../shared/ui';
import EyeOpen from '../../../assets/icons/eye.svg?react';
import EyeClosed from '../../../assets/icons/eye-off.svg?react';
import { StyledForm } from './RegisterForm.styled';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string('name nust be a string').required('name is required'),
  mail: yup
    .string()
    .email('Enter a valid Password*')
    .required('email os required'),
  pass: yup.string().min(7).max(30).required(),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

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
        className="userName input"
        type={'text'}
        span={'Name:'}
        placeholder={'Ilona Ratushniak'}
        {...register('name')}
      />
      <CustomInput
        className="mail input"
        type={'email'}
        span={'Mail:'}
        placeholder={'Your@email.com'}
        {...register('mail')}
      />
      <div className="pass_cont">
        <CustomInput
          className="password input"
          type={type}
          span={'Password:'}
          placeholder={'Yourpasswordhere'}
          {...register('pass')}
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
      <p>{errors.pass?.message}</p>

      <div className="under-section">
        <div className="button-wrapper">
          <Button type="submit" variant={'register'}>
            Registration
          </Button>
        </div>
        <CustomLink>
          <p className="link">Already have an account?</p>
        </CustomLink>
      </div>
    </StyledForm>
  );
}
