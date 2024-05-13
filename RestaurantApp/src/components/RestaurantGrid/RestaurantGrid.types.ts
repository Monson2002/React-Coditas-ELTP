import { Dispatch, SetStateAction } from "react";
import { RestaurantCardProps } from "../RestaurantCard/RestaurantCard.types";

export interface RestaurantGridProps { 
    restaurants: RestaurantCardProps[];
    restaurantDetailPage: RestaurantCardProps[];
    setRestaurantDetailPage: Dispatch<SetStateAction<RestaurantCardProps[]>>;
} 
