import { useForm } from 'react-hook-form';
import { CustomInput } from '../../../shared/ui';

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
        span={'Password:'}
        placeholder={'Yourpasswordhere'}
        {...register('pass')}
      />
      <input type="text" {...register('name')} />
      <input type="submit" />
    </form>
  );
}
