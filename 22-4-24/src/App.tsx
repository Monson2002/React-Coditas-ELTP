import styles from './App.module.scss';
import { Component, ReactNode } from 'react';
import { data } from "./data.tsx";
import ProductListMain from './components/ProductList/ProductList.tsx';

const {ProductList, ProductListClass} = ProductListMain;

function App() {
  return (
    <div className={styles.App}>
      <ProductList products={data} alertProd={(name: string) => alert(`Selected ${name}`)}/>
    </div>
  )
}

class AppClass extends Component<{},{}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className={styles.App}>
        <ProductListClass products={data} alertProd={(name: string) => alert(`Selected ${name}`)}/>
      </div>
    )
  }
}

export default {
  App,
  AppClass
}
