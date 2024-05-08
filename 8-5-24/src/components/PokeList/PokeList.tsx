import { PokeListProps } from "./PokeList.types"; 
import styles from './PokeList.module.scss'; 

import Pokemon from "../Pokemon/Pokemon";
 
const PokeList = ({title, data, move}: PokeListProps) => { 
  
  return ( 
    <div className={styles.Container}> 
      <h3>{title}</h3>
      <section className={styles.PokeList}>
        {
          data.map((pokemon: any, index: number) => <Pokemon key={index} name={pokemon.name} move={move} id={pokemon.id}/>)
        }
      </section>
    </div> 
  ); 
}; 
  
export default PokeList;  
