import { RestaurantCardProps } from "./RestaurantCard.types";
import styles from './RestaurantCard.module.scss';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RestaurantCard = ({ imgSrc, name, address, description, feedback, rating, restaurantDetailPage, onclick }: RestaurantCardProps) => {

  return (
    <Card sx={{  }}
      className={`${restaurantDetailPage!.length > 0 ? `${styles.OnModal}` : ''} ${styles.RestaurantCard}`}
      onClick={() => {
        onclick([
          {
            name: name,
            imgSrc: imgSrc,
            address: address, 
            description: description, 
            feedback: feedback, 
            rating: rating,
          }
        ]);
      }}
    >
      <CardMedia
        component="img"
        image={imgSrc}
        alt="Paella dish"
      />
      <CardContent>
        <div className={styles.Flex}>
          <Typography
            variant="h5"
            color="black"
            align={"center"}
            fontWeight={800}
          >
            {name}
          </Typography>
        </div>
        <Typography
          variant="caption"
          color="darkgray"
          align={"justify"}
        >
          {address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;  
