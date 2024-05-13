import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import '@fontsource/roboto/300.css';

import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';
import { SignupInputs } from './components/Signup/Signup.types';
import { LoginInputs } from './components/Login/Login.types';
import { registerUserAPI } from './api/registerUserAPI';
import { loginUserAPI } from './api/loginUserAPI';
import HomePage from './components/HomePage/HomePage';
import getRestaurantsAPI from './api/getRestaurantsAPI';
import { RestaurantCardProps } from './components/RestaurantCard/RestaurantCard.types';
import Restaurant from './components/Restaurant/Restaurant';

function App() {

  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [restaurants, setRestaurants] = useState<RestaurantCardProps[]>([]);
  const [restaurantDetailPage, setRestaurantDetailPage] = useState<RestaurantCardProps[]>([]);

  console.log(loggedIn, restaurantDetailPage);
  
  const toggleStates = () => {
    if (!loggedIn) {
      if (showLogin) {
        setShowLogin(false);
        setShowSignup(true);
      } else {
        setShowLogin(true);
        setShowSignup(false);
      }
    } else {
      setShowLogin(false);
      setShowSignup(false);
      if (restaurantDetailPage) {
        console.log('restaurant detail page');
      }
    }
  }

  const loginUser = async (loginData: LoginInputs) => {
    try {
      console.log(loginData);
      const response = await loginUserAPI(loginData);
      console.log(response);
      if (response) {
        setLoggedIn(true) 
        setShowLogin(false);
        setShowSignup(false);
      } else {
        setLoggedIn(false);
        setShowLogin(true);
      }
    } catch (error: any) {
      console.log(error.message);
    }
    // /auth/login
  }

  const signupUser = async (signupData: SignupInputs) => {
    try {
      console.log(signupData);
      await registerUserAPI(signupData);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  const getRestaurantsDataFromAPI = async () => {
    const data = await getRestaurantsAPI();
    setRestaurants(data);
  }

  useEffect(() => {
    getRestaurantsDataFromAPI();
  }, [loggedIn])

  return (
    <>
      <div className={styles.App}>
        {showLogin && <Login toggleLogin={toggleStates} loginUser={loginUser} />}
        {showSignup && <Signup toggleLogin={toggleStates} signupUser={signupUser} />}
        {loggedIn && <HomePage restaurants={restaurants} setLoggedIn={setLoggedIn} setShowLogin={setShowLogin} 
        restaurantDetailPage={restaurantDetailPage} setRestaurantDetailPage={setRestaurantDetailPage}/>}
        {restaurantDetailPage.length > 0 && <Restaurant name={restaurantDetailPage[0].name} imgSrc={restaurantDetailPage[0].imgSrc} address={restaurantDetailPage[0].address} description={restaurantDetailPage[0].description} feedback={restaurantDetailPage[0].feedback} rating={restaurantDetailPage[0].rating}/>}
      </div>
    </>
  )
}

export default App
