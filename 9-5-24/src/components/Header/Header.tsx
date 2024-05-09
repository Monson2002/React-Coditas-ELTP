import { HeaderProps } from "./Header.types"; 
import styles from './Header.module.scss'; 
 
const Header = ({}: HeaderProps) => { 
  return ( 
    <div className={styles.Header}> 
      <div className={styles.Text}>Employee Management</div>
    </div> 
  ); 
}; 
  
export default Header;  
