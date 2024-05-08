export interface PokeListProps { 
    title: string,
    data: PokemonType[],
    move: (id: number) => JSX.Element
} 

export interface PokemonType {
    id: number,
    name: string,
    caught?: boolean
}