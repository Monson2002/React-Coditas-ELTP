import { useEffect, useState } from "react";
import styles from './Main.module.scss';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';

import { PokemonProps } from "../Pokemon/Pokemon.types";
import { MainProps } from "./Main.types";
import PokemonList from "../PokemonList/PokemonList";
import getPokemonData from '../../api/getPokemonDataAPI';

const Main = ({ }: MainProps) => {

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const LeftArrow = (idObj: {id: number}) => <ArrowCircleLeftSharpIcon onClick={() => handleToggleCaught(idObj)}/>
  const RightArrow = (idObj: {id: number}) => <ArrowCircleRightSharpIcon onClick={() => handleToggleCaught(idObj)}/>

  const allPokemon = pokemons.filter((pokemon) => !pokemon.caught);
  const caughtPokemon = pokemons.filter((pokemon) => pokemon.caught);

  const getPokemonFromAPI = async () => {
    const dataFromAPI = await getPokemonData();
    setPokemons(dataFromAPI);  
    
  }

  const handleToggleCaught = (idObject: {id: number}) => {
    const selectedPokemon = pokemons.find((pokemon) => pokemon.id === idObject.id)!;
    selectedPokemon!.caught = !selectedPokemon.caught;
    setPokemons([...pokemons]);
  }

useEffect(() => {
  getPokemonFromAPI();
}, [])

return (
  <div className={styles.Main}>
    <PokemonList 
    title="All Pokemon"
    data={allPokemon}
    rightArrow={RightArrow}
    onClick={handleToggleCaught}
    />
    <PokemonList 
    title="Caught Pokemon"
    data={caughtPokemon}
    leftArrow={LeftArrow}
    onClick={handleToggleCaught}/>
  </div>
); 
};

export default Main;  
