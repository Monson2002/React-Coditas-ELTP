import { ProductProps } from "./Product.types.ts";
import styles from './Product.module.scss';
import { Component, ReactNode } from "react";

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

class ProductClass extends Component<{ id: number, img: string, name: string, price: number, btn: string, alertProd: (name: string) => void }, {}> {
  constructor(props: {id: number, img: string, name: string, price: number, btn: string, alertProd: (name: string) => void}) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className={styles.Product}>
        <img src={this.props.img} alt="Image" />
        <h2>{this.props.name}</h2>
        <h3>{this.props.price}</h3>
        <button className={styles.Btn} 
        onClick={() => this.props.alertProd(this.props.name)}>{this.props.btn}</button>
      </div>
    )
  }
}

export default {
  Product,
  ProductClass
};