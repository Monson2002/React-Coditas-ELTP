import { PokemonProps } from "../Pokemon/Pokemon.types";

export interface PokemonListProps { 
    title: string;
    data: PokemonProps[];
    onClick: any;
    rightArrow?: any;
    leftArrow?: any;
} 
