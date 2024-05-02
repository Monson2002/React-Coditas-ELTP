import { Component, ReactElement } from 'react';
import { ButtonInterface } from '../../App.types';
import styles from './Button.module.scss';

const Button = (props: ButtonInterface<string>) => {
  return (
    <button className={styles.Btn}>
      {props.text}
    </button>
  )
}

class ButtonClass extends Component<{ text: string }, {}> {
  constructor(props: { text: string }) {
    super(props);
  }
  render(): ReactElement {
    return (
      <button className={styles.Btn}>
        {this.props.text}
      </button>
    )
  }
}

export default {
  Button,
  ButtonClass
};