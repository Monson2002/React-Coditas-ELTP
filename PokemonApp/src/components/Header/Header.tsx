import { HeaderProps } from "./Header.types"; 
import styles from './Header.module.scss'; 
 
const Header = ({}: HeaderProps) => { 
  return ( 
    <div className={styles.Header}> 
      <h1>Poke Tracker</h1>
    </div> 
  ); 
}; 
  
export default Header;  
