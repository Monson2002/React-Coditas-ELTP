import { HomePageProps } from "./HomePage.types";
import styles from './HomePage.module.scss';
import Navbar from "../Navbar/Navbar";
import RestaurantGrid from "../RestaurantGrid/RestaurantGrid";

const HomePage = ({ restaurants, setLoggedIn, setShowLogin, restaurantDetailPage, setRestaurantDetailPage }: HomePageProps) => {
  return (
    <div className={styles.HomePage}>
      <Navbar setLoggedIn={setLoggedIn} setShowLogin={setShowLogin}/>
      {restaurants.length > 0 && <RestaurantGrid restaurants={restaurants} restaurantDetailPage={restaurantDetailPage} setRestaurantDetailPage={setRestaurantDetailPage}/>}
    </div>
  );
};

export default HomePage;