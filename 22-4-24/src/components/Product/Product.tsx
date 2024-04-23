import { ProductProps } from "./Product.types.ts"; 
import styles from './Product.module.scss';

const Product = ({ id, img, name, price, btn, alertProd }: ProductProps) => {  
  return (
    <div className={styles.Product}>
      <img src={img} alt="Image" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button className={styles.Btn} onClick={() => alertProd(name)}>{btn}</button>
    </div>
  )
} 

export default Product;