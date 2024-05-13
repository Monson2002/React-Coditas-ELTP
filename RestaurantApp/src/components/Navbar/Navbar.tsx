import { NavbarProps } from "./Navbar.types";
import styles from './Navbar.module.scss';

const Navbar = ({ setLoggedIn, setShowLogin }: NavbarProps) => {
  
  return (
    <div className={styles.Navbar}>
      <h1>Restaurants</h1>
      <div className={styles.Icons}>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-right-from-bracket" 
        onClick={() => {
          setLoggedIn(false);
          setShowLogin(true);
        }}></i>
      </div>
    </div>
  );
};

export default Navbar; 