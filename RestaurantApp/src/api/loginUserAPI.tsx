import axios from 'axios';
import { LoginInputs } from '../components/Login/Login.types';
import getRestaurantsAPI from './getRestaurantsAPI';

export const loginUserAPI = async (loginData: LoginInputs) => {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, loginData);
  if (response) {
    getRestaurantsAPI();
  }
  // console.log(response.data, import.meta.env.VITE_MONGO_BASE_URL);
  // return true;
}