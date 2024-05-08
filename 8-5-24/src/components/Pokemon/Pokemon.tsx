import { PokemonProps } from "./Pokemon.types"; 
import styles from './Pokemon.module.scss'; 
 
const Pokemon = ({name, move, id}: PokemonProps) => { 
  return ( 
    <div className={styles.Pokemon}> 
      {name}      
      {move(id)}
    </div> 
  ); 
}; 
  
export default Pokemon;  