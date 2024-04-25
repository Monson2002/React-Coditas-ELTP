import { HeaderProps } from "./Header.types"; 
import styles from './Header.module.scss'; 
 
const Header = ({title}: HeaderProps) => { 
  return ( 
    <div className={styles.Header}> 
      {title}
    </div> 
  ); 
}; 
  
export default Header;  
