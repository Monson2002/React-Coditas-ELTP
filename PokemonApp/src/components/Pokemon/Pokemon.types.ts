export interface PokemonProps {
    id: number;
    name: string;
    caught?: boolean;
    handleClick?: (idObj: { id: number }) => void;
    leadingBtn?: any;
    trailingBtn?: any;
} 
