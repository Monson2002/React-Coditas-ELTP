import styles from './App.module.css';
import { useState } from "react";

import Counter from "./components/Counter/Counter.tsx";

function App() {
  const [countArr, setCountArr] = useState([1,1,2]);

  const handleIncrement = (index: number, value: number) => {
    const newArr = [...countArr]
    newArr[index] += value;
    setCountArr(newArr);
  }

  const handleSquare = (index: number) => {
    const newArr = [...countArr]
    newArr[index] = newArr[index]*newArr[index];
    setCountArr(newArr);
  }

  return (
    <div className={styles.App}>
      <Counter count={countArr[0]} increment={() => handleIncrement(0, 5)}/>
      <Counter count={countArr[1]} increment={() => handleIncrement(1, 10)}/>
      <Counter count={countArr[2]} increment={() => handleSquare(2)}/>
    </div>
  )
}

export default App
