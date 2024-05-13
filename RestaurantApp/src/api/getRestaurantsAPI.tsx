import axios from "axios"
import { RestaurantCardProps } from "../components/RestaurantCard/RestaurantCard.types";

const getRestaurantsAPI = async (): Promise<RestaurantCardProps[]> => {
  const response = await axios.get(`https://42f7-2401-4900-1c7e-872b-d070-de04-7efd-4fa6.ngrok-free.app/restaurants`);
  console.log(response);
  
  return response.data;
}

export default getRestaurantsAPI;