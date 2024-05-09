import axios from 'axios';
import { PokemonProps } from '../components/Pokemon/Pokemon.types';

const getPokemonData = async (): Promise<PokemonProps[]> => {
  const { data } = await axios.get('', {
    headers: {
      "ngrok-skip-browser-warning": "skip-browser-warning",
    }
  });

  return [
    { id: 1, name: "Charmander", caught: false },
    { id: 2, name: "Wobuffet", caught: false },
    { id: 3, name: "Squirtle", caught: true },
    { id: 4, name: "Charmeleon", caught: false },
    { id: 5, name: "Charizard", caught: true },
  ]
}

export default getPokemonData;