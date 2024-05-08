export interface PokemonProps { 
    name: string,
    move: (id: number) => JSX.Element,
    id: number
} 
