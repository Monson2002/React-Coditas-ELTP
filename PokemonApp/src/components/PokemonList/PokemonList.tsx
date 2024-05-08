import styles from './PokemonList.module.scss'; 
import { PokemonListProps } from "./PokemonList.types"; 
import { PokemonProps } from '../Pokemon/Pokemon.types';
import Pokemon from '../Pokemon/Pokemon'; 

const PokemonList = ({title, data, leftArrow, rightArrow, onClick}: PokemonListProps) => { 
  return ( 
    <div className={styles.PokemonList}> 
      <h3 className={styles.Header}>{title}</h3>
      {
        data.map((pokemon: PokemonProps, index) => {
        return (
          <Pokemon key={index} name={pokemon.name} id={pokemon.id} handleClick={onClick} leadingBtn={leftArrow} trailingBtn={rightArrow}/>
        )
        })
      }
    </div> 
  ); 
}; 
  
export default PokemonList;  
