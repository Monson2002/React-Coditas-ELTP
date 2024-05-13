import { SignupProps } from "./Signup.types";
import styles from './Signup.module.scss';
import { useForm, SubmitHandler } from "react-hook-form"
import { SignupInputs } from "../Signup/Signup.types";
import { TextField, Button, Typography } from "@mui/material";

const Signup = ({ toggleLogin, signupUser }: SignupProps) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInputs>()

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    signupUser(data);
  }

  console.log(watch("name"), watch("username"), watch("password"));

  return (
    <div className={styles.Signup}>
      <form
        className={styles.FormInput}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField {...register("name", {minLength: 5, maxLength: 20})}
          required={true}
          size='small'
          placeholder='Name'
          className={styles.TextField}
        />
        {errors.name && <span className={styles.ErrorSpan}>Name should be 5-20 characters</span>}

        <TextField {...register("username", {minLength: 5, maxLength: 20})}
          required={true}
          size='small'
          placeholder='Username'
          className={styles.TextField}
        />
        {errors.username && <span className={styles.ErrorSpan}>Username should be 5-20 characters</span>}

        <TextField {...register("password", {minLength: 5, maxLength: 20})}
          required={true}
          size='small'
          placeholder='Password'
          type="password"
          className={styles.TextField}
        />
        {errors.password && <span className={styles.ErrorSpan}>Password should be 5-20 characters</span>}

        <TextField {...register("confirmPassword", {
          validate: (val: string) => {
            if (watch('password') != val) {
              return "Your passwords do no match";
            }
          },
        })}
          required={true}
          size='small'
          placeholder='Confirm Password'
          type="password"
          className={styles.TextField}
        />
        {errors.confirmPassword && <span className={styles.ErrorSpan}>Passwords don't match</span>}

        <Button
          size="small"
          type="submit"
          variant="contained"
          className={styles.Btn}
        >
          Sign Up
        </Button>
        <div className={styles.LoginSignupLink}>
          <Typography variant="body2">
            Already have an account ?
          </Typography>
          <Button size="small"
            onClick={() => toggleLogin()}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;  
