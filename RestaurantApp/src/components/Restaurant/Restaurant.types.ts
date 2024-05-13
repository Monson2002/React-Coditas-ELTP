export interface RestaurantProps { 
    name: string; 
    imgSrc: string; 
    address: string; 
    description: string; 
    feedback: string; 
    rating: number;
} 

export interface Inputs {
    rating: number;
    feedback: string;
}
