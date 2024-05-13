import { Dispatch, SetStateAction } from "react";
import { RestaurantCardProps } from "../RestaurantCard/RestaurantCard.types";

export interface HomePageProps {    
    restaurants: RestaurantCardProps[];
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
    setShowLogin: Dispatch<SetStateAction<boolean>>;
    restaurantDetailPage: RestaurantCardProps[];
    setRestaurantDetailPage: Dispatch<SetStateAction<RestaurantCardProps[]>>;
} 
