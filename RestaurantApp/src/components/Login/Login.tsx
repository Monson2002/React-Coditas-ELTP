import styles from './Login.module.scss';
import { LoginProps, LoginInputs } from "./Login.types";
import { SubmitHandler, useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Login = ({ toggleLogin, loginUser }: LoginProps) => {

  // const [formData, setFormData] = useState({ username: '', password: '' });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => (
  //     { ...prevData, [name]: value }
  //   ))
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // }

  // return (
  //   <div className={styles.Login}>
  //     <Box
  //       component="form"
  //       sx={{
  //         '& > :not(style)': { m: 1, width: '25ch' },
  //       }}
  //       noValidate
  //       autoComplete="off"
  //       onSubmit={handleSubmit}
  //       className={styles.FormInput}
  //     >
  //       <TextField
  //         id="username"
  //         label="Username"
  //         variant="filled"
  //         autoComplete="true"
  //         size="small"
  //         name="username"
  //         value={formData.username}
  //         onChange={handleChange}
  //       />
  //       <TextField
  //         id="password"
  //         label="Password"
  //         variant="filled"
  //         size="small"
  //         name="password"
  //         value={formData.password}
  //         onChange={handleChange}
  //       />
  //       <Button size="small" type="submit" variant="contained" className={styles.Btn}>Login</Button>
  //       <div className={styles.LoginSignupLink}>
  //         <Typography variant="body2">
  //           Don't have an account ?
  //         </Typography>
  //         <Button size="small"
  //           onClick={() => toggleLogin()}
  //           >
  //           Sign up
  //         </Button>
  //       </div>
  //     </Box>
  //   </div>
  // );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    loginUser(data);
  }

  console.log(watch("username"), watch('password'))

  return (
    <div className={styles.Login}>
      <form
        className={styles.FormInput}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField {...register("username")}
          required={true}
          size='small'
          className={styles.TextField}
          placeholder='Username'
        />

        <TextField {...register("password")}
          required={true}
          size='small'
          className={styles.TextField}
          type="password"
          placeholder='Password'
        />

        <Button
          size="small"
          type="submit"
          variant="contained"
          className={styles.Btn}
        >
          Login
        </Button>
        <div className={styles.LoginSignupLink}>
          <Typography variant="body2">
            Don't have an account ?
          </Typography>
          <Button size="small"
            onClick={() => toggleLogin()}
          >
            Sign up
          </Button>
        </div>
      </form >
    </div >
  )
};

export default Login;  
