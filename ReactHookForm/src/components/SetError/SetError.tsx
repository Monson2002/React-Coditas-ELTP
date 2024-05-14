import { useForm } from "react-hook-form";
import { FormInputs } from "./SetError.types";


const SetError = () => {
  // const { register, handleSubmit, setError, formState: { errors } } = useForm<FormInputs>({
  //   defaultValues: {
  //     lastname: ''
  //   }
  // });

  const { register, handleSubmit, setError, formState: {errors}} = useForm<FormInputs>({
    defaultValues: {
      lastname: 'kl'
    }
  })

  const onSubmit = (data: FormInputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input {...register("lastname")} />
      {errors && <p>{errors.lastname?.message}</p>}
      {errors && <p>{errors.lastname?.type}</p>}

      <button type="button" onClick={() => setError('lastname', {
        type: 'manual',
        message: 'this is a custom error'
      }, {shouldFocus: true})}>submit</button>

    </form>
  );
};

export default SetError;
