import ProductProps from "./ProductList.types.ts";
import Product from "../Product/Product.tsx";

const ProductList = ({products}: ProductProps) => {  
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
          />
          )
      })}
    </>
  )
}

export default ProductList;