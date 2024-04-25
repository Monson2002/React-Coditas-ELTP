import styles from './Counter.module.scss';
import { CounterProps } from './Counter.types.ts';

const Counter = ({ count, increment }: CounterProps) => {  
  console.log(increment);
  
  return (
    <div className={styles.Counter}>
      <span>{count}</span>
      <button className={styles.Btn} onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter;