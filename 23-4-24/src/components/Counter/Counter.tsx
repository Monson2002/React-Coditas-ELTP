import { Component, ReactNode } from 'react';
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

class CounterClass extends Component<{count: number, increment: () => void}, {}> {
  constructor(props: {count: number, increment: () => void}) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className={styles.Counter}>
        <span>{this.props.count}</span>
        <button className={styles.Btn} onClick={this.props.increment}>Increment</button>
      </div>
    )
  }
}

export default {
  Counter,
  CounterClass
};