import styles from './App.module.scss';
import { data } from "./data.tsx";
import ProductList from './components/ProductList/ProductList.tsx';

function App() {
  return (
    <div className={styles.App}>
      <ProductList products={data}/>
    </div>
  )
}

export default App
