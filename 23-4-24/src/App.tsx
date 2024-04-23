import styles from './App.module.css';
import { useState } from "react";

import Counter from "./components/Counter/Counter.tsx";

function App() {
  let [count, setCount] = useState([0,0]);

  const increment = (count: number[], index: number) => {
    const newArr = [...count]
    newArr[index]++;
    setCount(newArr);
  }

  return (
    <div className={styles.App}>
      <Counter count={count[0]} increment={() => increment(count, 1)}/>
      <Counter count={count[1]} increment={() => increment(count, 0)}/>
    </div>
  )
}

export default App
