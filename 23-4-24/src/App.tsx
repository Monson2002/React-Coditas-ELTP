import styles from './App.module.css';
import { useState } from "react";

import Counter from "./components/Counter/Counter.tsx";

function App() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  const increment = (num: number) => {
    if (num === 1) {
      setCount2(++count2);
    } else {
      setCount1(++count1)
    }
  }

  return (
    <div className={styles.App}>
      <Counter count={count1} increment={() => increment(1)}/>
      <Counter count={count2} increment={() => increment(2)}/>
    </div>
  )
}

export default App
