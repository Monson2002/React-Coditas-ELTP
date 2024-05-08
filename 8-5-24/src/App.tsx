import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { pokemons } from './api/data';

import PokeList from './components/PokeList/PokeList'
import axios from 'axios';

const App = () => {

  const [pokemonDataFromAPI, setPokemonDataFromAPI] = useState(pokemons);
  // const [pokemonData, setPokemonData] = useState<boolean[] | null>(null);

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        const data = await axios.get(
          'https://18be-47-247-159-210.ngrok-free.app/pokemons', {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
          },
        });
        
        const response = await data.data;
        setPokemonDataFromAPI(response);
        // handleCaughtLogic();
        console.log(response);
      } catch (error: any) {
        if(error.response) {
          console.log(error.response.message);
          console.log(error.response.status);
        } else {
          console.log(error.message);
        }
      }
    }

    fetchPokeData();
  }, [])

  // const handleCaughtLogic = () => {
  //   const pokemonWithCaughtData = pokemonDataFromAPI.map((obj) => obj.caught === true ? Math.random() > 0.5 : false)
  //   console.log(pokemonWithCaughtData);
    
  //   setPokemonData(pokemonWithCaughtData);
  // }

  const handleMove = (id: number) => {
    console.log(`HandleMove Clicked with ${id}`);
    const foundPokemon = pokemonDataFromAPI.find((pokemon) => pokemon.id === id);
    const otherPokemons = pokemonDataFromAPI.filter((pokemon) => pokemon.id !== id);
    foundPokemon!.caught = !foundPokemon!.caught;
    setPokemonDataFromAPI([...otherPokemons, foundPokemon!])
  }

  // console.log(pokemons, pokemonData);
  
  const moveBtn = (id: number) => {
    return <button className={styles.Btn} onClick={() => handleMove(id)}>Move</button>
  }

  return (
    <>
      <main className={styles.App}>
        <h1>Poke List</h1>
        <section className={styles.ContainerParent}>
          <PokeList title="All" data={pokemonDataFromAPI.filter((pokemon) => !pokemon.caught)} move={moveBtn} />
          <PokeList title="Caught" data={pokemonDataFromAPI.filter((pokemon) => pokemon.caught)} move={moveBtn} />
        </section>
      </main>
    </>
  )
}

export default App
