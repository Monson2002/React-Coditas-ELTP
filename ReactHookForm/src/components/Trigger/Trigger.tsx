import React from "react"
import { useForm } from "react-hook-form"

type FormInputs = {
  firstName: string
  lastName: string
}

const Trigger = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>()

  console.log(errors);
  

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button
        type="button"
        onClick={async () => {
          const response = await trigger("lastName", {shouldFocus: true});
          console.log(response);
          
        }}
      >
        Trigger
      </button>
      <button
        type="button"
        onClick={() => {
          trigger(["firstName", "lastName"])
        }}
      >
        Trigger Multiple
      </button>
      <button
        type="button"
        onClick={() => {
          trigger()
        }}
      >
        Trigger All
      </button>
    </form>
  )
}

export default Trigger;