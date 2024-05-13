import { RestaurantProps } from "./Restaurant.types";
import styles from './Restaurant.module.scss';
import { useState } from 'react';

import { Typography } from "@mui/material";
import Rating from '@mui/material/Rating';

const Restaurant = ({ name, imgSrc, address, description, feedback, rating }: RestaurantProps) => {

  const [value, setValue] = useState(feedback);
  const [userRating, setUserRating] = useState(rating);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  const handleRatingChange = (newValue: number) => {
    setUserRating(newValue);
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLTextAreaElement>, value: string, userRating: number) => {
    e.preventDefault();
    const data = {
      feedback: value,
      rating: userRating
    }
    console.log(data);
    
  }

  return (
    <div className={styles.Restaurant}>
      <div className={styles.Container}>
        <img className={styles.Img} src={imgSrc} alt="" />
        <div className={styles.Header}>
          <Typography
            variant="h5"
            color="black"
            align={"center"}
            fontWeight={900}
          >
            {name}
          </Typography>
        </div>
        <Typography
          variant="caption"
          color="slategray"
          align={"justify"}
        >
          {address}
        </Typography>
        <Typography
          variant="body2"
          color="black"
          align={"justify"}
        >
          {description}
        </Typography>
        <form
          className={styles.Flex}
          onSubmit={(e: any) => handleSubmit(e, value, userRating)}
        >
          <div>
            <Typography
              variant="body1"
              color="black"
              align={"left"}
            >
              Feedback
            </Typography>
            <textarea
              name="feedback"
              id="feedback"
              rows={8}
              value={value}
              onChange={(e) => handleInputChange(e)}
            >
              {value}
            </textarea>
          </div>
          <div>
            <Typography
              variant="body1"
              color="black"
              align={"left"}
            >
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={userRating}
              onChange={(e: React.SyntheticEvent<Element, Event>, newValue: any) => handleRatingChange(newValue)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Restaurant;