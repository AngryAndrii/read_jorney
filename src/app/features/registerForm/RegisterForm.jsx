import { useForm } from 'react-hook-form';
import { Button, CustomInput, CustomLink } from '../../../shared/ui';
import { StyledForm } from './RegisterForm.styled';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  // console.log(watch('example'));
  // watch('name');

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* <CustomInput
        span={'Name:'}
        placeholder={'Ilona Ratushniak'}
        {...register('name')}
        ref={null}
      />
      {errors.name && <span>This field is required</span>}
      <CustomInput
        span={'Mail:'}
        placeholder={'Your@email.com'}
        {...register('mail')}
        ref={null}
      />
      {errors.mail && <span>This field is required</span>}
      <CustomInput
        span={'Password:'}
        placeholder={'Yourpasswordhere'}
        {...register('pass')}
        ref={null}
      />
      
      {errors.pass && <span>This field is required</span>} */}
      <CustomInput
        span={'Name:'}
        placeholder={'Ilona Ratushniak'}
        {...register('name')}
      />
      <CustomInput
        span={'Mail:'}
        placeholder={'Your@email.com'}
        {...register('mail')}
      />
      <CustomInput
        span={'Password:'}
        placeholder={'Yourpasswordhere'}
        {...register('pass')}
      />
      <div>
        <Button variant={'register'}>Registration</Button>
        <CustomLink>Already have an account?</CustomLink>
      </div>
    </StyledForm>
  );
}
