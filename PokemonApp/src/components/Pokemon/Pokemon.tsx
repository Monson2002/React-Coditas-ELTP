import { PokemonProps } from "./Pokemon.types"; 
import styles from './Pokemon.module.scss'; 
 
const Pokemon = ({id, name, leadingBtn, trailingBtn}: PokemonProps) => { 
  const Leading = leadingBtn || (() => {});
  const Trailing = trailingBtn || (() => {});
  
  return ( 
    <div className={styles.Pokemon}> 
      <Leading id={id}/>
      {name}
      <Trailing id={id}/>
    </div> 
  ); 
}; 
  
export default Pokemon;  