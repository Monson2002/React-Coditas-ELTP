import { useForm } from "react-hook-form"

const GetFieldState = () => {
  const {
    register,
    getFieldState,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
    },
  })

  const fieldState = getFieldState("firstName")

  return (
    <form>
      <input {...register("firstName", { required: true })} />{" "}
      <p>{getFieldState("firstName").isDirty && "dirty"}</p>{" "}
      <p>{getFieldState("firstName").isTouched && "touched"}</p>
      <button
        type="button"
        onClick={() => console.log(getFieldState("firstName"))}
      >
        field state
      </button>
    </form>
  )
}

export default GetFieldState;