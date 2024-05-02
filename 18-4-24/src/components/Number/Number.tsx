import { Component, ReactNode } from 'react';
import styles from './Number.module.scss';

const Number = () => {
  return <div className={styles.Number}>0</div>
}

class NumberClass extends Component<{},{}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className={styles.Number}>0</div>
    )
  }
}

export default {
  Number,
  NumberClass
};