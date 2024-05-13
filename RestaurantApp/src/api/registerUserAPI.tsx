import axios from 'axios';
import { SignupInputs } from '../components/Signup/Signup.types';

export const registerUserAPI = async (signupData: SignupInputs) => {
  console.log(signupData);
  
  const response = await axios.post(`https://42f7-2401-4900-1c7e-872b-d070-de04-7efd-4fa6.ngrok-free.app/auth/register`, signupData);

  console.log( response.data);
}