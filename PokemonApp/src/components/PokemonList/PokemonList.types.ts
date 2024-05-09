import { PokemonProps } from "../Pokemon/Pokemon.types";

export interface PokemonListProps { 
    title: string;
    data: PokemonProps[];
    onClick: (idObj: {id: number}) => void;
    rightArrow?: (idObj: {id: number}) => JSX.Element;
    leftArrow?: (idObj: {id: number}) => JSX.Element;
} 
