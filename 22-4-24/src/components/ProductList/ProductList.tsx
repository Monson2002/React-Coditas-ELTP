import { Component, ReactNode } from "react";
import ProductListProps from "./ProductList.types.ts";
import ProductMain from "../Product/Product.tsx";

const {Product, ProductClass} = ProductMain;

const ProductList = ({ products, alertProd }: ProductListProps) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            btn={product.btn}
            alertProd={() => alertProd(product.name)}
          />
        )
      })}
    </>
  )
}

class ProductListClass extends Component<{
  products: {
    id: number,
    img: string,
    name: string,
    price: number,
    btn: string,
  }[],
  alertProd: (name: string) => void
}, {}> {
  constructor(props: {
    products: {
      id: number,
      img: string,
      name: string,
      price: number,
      btn: string,
    }[], alertProd: (name: string) => void
  }) {
    super(props);
  }

  render(): ReactNode {
    return (
      <>
        {this.props.products.map((product) => {
          return (
            <ProductClass
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              btn={product.btn}
              alertProd={() => this.props.alertProd(product.name)}
            />
          )
        })}
      </>
    )
  }
}

export default {
  ProductList,
  ProductListClass
};