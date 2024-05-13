import { RestaurantGridProps } from "./RestaurantGrid.types";
import styles from './RestaurantGrid.module.scss';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { RestaurantCardProps } from "../RestaurantCard/RestaurantCard.types";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const RestaurantGrid = ({ restaurants, restaurantDetailPage, setRestaurantDetailPage }: RestaurantGridProps) => {
  console.log(restaurants);

  return (
    <div className={styles.RestaurantGrid}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {restaurants.map((restaurant: RestaurantCardProps, index: number) => {
            return (
              <Grid item xs={4} key={index} className={styles.Grid}>
                <RestaurantCard
                  imgSrc={restaurant.imgSrc}
                  name={restaurant.name}
                  address={restaurant.address}
                  description={restaurant.description}
                  feedback={restaurant.feedback}
                  rating={restaurant.rating}
                  restaurantDetailPage={restaurantDetailPage}
                  onclick={setRestaurantDetailPage}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default RestaurantGrid;  
