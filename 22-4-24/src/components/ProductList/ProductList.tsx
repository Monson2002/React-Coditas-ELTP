import ProductListProps from "./ProductList.types.ts";
import Product from "../Product/Product.tsx";

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

export default ProductList;