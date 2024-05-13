import axios from 'axios';
import { SignupInputs } from '../components/Signup/Signup.types';

export const registerUserAPI = async (signupData: SignupInputs) => {
  console.log(signupData);
  
  const response = await axios.post(`https://restro-review.onrender.com/auth/signup`, signupData);

  console.log( response.data);
}