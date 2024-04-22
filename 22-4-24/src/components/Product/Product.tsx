import { ProductProps } from "./Product.types.ts"; 
import styles from './Product.module.scss';

const Product = (props: ProductProps) => {
  return (
    <div className={styles.Product}>
      <img src={props.img} alt="Image" />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button className={styles.Btn}>{props.btn}</button>
    </div>
  )
} 

export default Product;