import axios from 'axios';
import { LoginInputs } from '../components/Login/Login.types';
import getRestaurantsAPI from './getRestaurantsAPI';

export const loginUserAPI = async (loginData: LoginInputs) => {
  const response = await axios.post(`https://42f7-2401-4900-1c7e-872b-d070-de04-7efd-4fa6.ngrok-free.app/auth/login`, loginData);
  if (response) {
    getRestaurantsAPI();
  }
  console.log(response);
  // return true;
}