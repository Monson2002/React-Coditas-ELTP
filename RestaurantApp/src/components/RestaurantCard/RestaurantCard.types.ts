import { Dispatch, SetStateAction } from "react";
import { RestaurantProps } from "../Restaurant/Restaurant.types";

export interface RestaurantCardProps {
    imgSrc: string;
    name: string;
    address: string;
    description: string;
    feedback: string;
    rating: number;
    restaurantDetailPage?: RestaurantCardProps[];
    onclick?: Dispatch<SetStateAction<RestaurantProps[]>>;
} 
