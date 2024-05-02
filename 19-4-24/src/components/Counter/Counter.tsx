import { Component, ReactNode, useState } from 'react';
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

class CounterClass extends Component<{}, {count: number}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  decrement() {
    this.setState({count: this.state.count-1});
  }

  increment() {
    this.setState({count: this.state.count+1});
  }

  render(): ReactNode {
    return (
      <div className={styles.Counter}>
        <span className={styles.Btn} onClick={() => this.decrement()}>-</span>
        <span>{this.state.count}</span>
        <span className={styles.Btn} onClick={() => this.increment()}>+</span>
      </div>
    )
  }
}

export default {
  Counter,
  CounterClass
};