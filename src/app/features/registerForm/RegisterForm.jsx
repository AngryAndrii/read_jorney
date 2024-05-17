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

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput placeholder={'Name:'} />
      <input placeholder="lol" defaultValue="test" {...register('example')} />
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
