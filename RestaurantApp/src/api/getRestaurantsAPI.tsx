import axios from "axios"
import { RestaurantCardProps } from "../components/RestaurantCard/RestaurantCard.types";

const getRestaurantsAPI = async (): Promise<RestaurantCardProps[]> => {
  const response = await axios.get(`${import.meta.env.VITE_MONGO_SERVER_URL}/restaurants`);  
  return [
    {
      name: 'Restaurant 1',
      imgSrc: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      address: 'Lane No. 7, Opposite SBI Bank, Ashok Chakra Society, Meera Nagar, Koregaon Park',
      description: 'Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.',
      feedback: '',
      rating: 0
    },
    {
      name: 'Restaurant 2',
      imgSrc: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      address: 'Lane No. 7, Opposite SBI Bank, Ashok Chakra Society, Meera Nagar, Koregaon Park',
      description: 'Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.',
      feedback: '',
      rating: 0
    }, {
      name: 'Restaurant 3',
      imgSrc: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      address: 'Lane No. 7, Opposite SBI Bank, Ashok Chakra Society, Meera Nagar, Koregaon Park',
      description: 'Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.',
      feedback: '',
      rating: 0
    }, {
      name: 'Restaurant 4',
      imgSrc: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      address: 'Lane No. 7, Opposite SBI Bank, Ashok Chakra Society, Meera Nagar, Koregaon Park',
      description: 'Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.',
      feedback: '',
      rating: 0
    },
  ]
}

export default getRestaurantsAPI;