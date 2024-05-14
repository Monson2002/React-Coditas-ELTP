export interface RestaurantProps { 
    name: string; 
    imgSrc: string; 
    address: string; 
    description: string; 
    feedback: string; 
    rating: number;
} 

export interface RestaurantDetailPageProps {
    restaurantDetailPage: RestaurantProps;
    setRestaurantDetailPage: any;
}

export interface Inputs {
    rating: number;
    feedback: string;
}
