import styles from './App.module.scss';
import { data } from "./data.tsx";
import ProductList from './components/ProductList/ProductList.tsx';

function App() {
  const alertProd = (name: string) => {
    alert(`Selected ${name}`)
  }
  return (
    <div className={styles.App}>
      <ProductList products={data} alertProd={alertProd}/>
    </div>
  )
}

export default App
