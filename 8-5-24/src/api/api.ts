import {pokemons} from "./data";
import { PokemonType } from "../components/PokeList/PokeList.types";

const fetchPokemons = (): Promise<{data: PokemonType[]}> => {
  return new Promise((res, rej) => {
    res({data: pokemons});
    rej({data: 'An error occurred'})
  })
}

export default fetchPokemons;
