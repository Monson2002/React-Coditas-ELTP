import styles from './App.module.css';
import { useState } from "react";

import Counter from "./components/Counter/Counter.tsx";

function App() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(++count1);
  }

  const increment2 = () => {
    setCount2(++count2);
  }

  return (
    <div className={styles.App}>
      <Counter count={count1} increment={() => increment2()}/>
      <Counter count={count2} increment={() => increment1()}/>
    </div>
  )
}

export default App
