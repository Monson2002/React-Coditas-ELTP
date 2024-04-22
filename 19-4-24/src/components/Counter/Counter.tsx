import { useState } from 'react';
import styles from './Counter.module.scss';
import { CounterProps } from './Counter.types.ts';

const Counter = ({ }: CounterProps) => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count++);
  }

  const decrement = () => {
    setCount(count--);
  }

  return (
    <div className={styles.Counter}>
      <span className={styles.Btn} onClick={decrement}>-</span>
      <span>{count}</span>
      <span className={styles.Btn} onClick={increment}>+</span>
    </div>
  )
}

export default Counter;