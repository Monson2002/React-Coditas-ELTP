import { Component, ReactNode } from 'react';
import styles from './Button.module.scss';

const Button = (props: {text: string}) => {
  return <button className={styles.Btn}>{props.text}</button>
}

class ButtonClass extends Component<{text: string}, {}> {
  constructor(props: {text: string}) {
    super(props);
  }

  render(): ReactNode {
    return <button className={styles.Btn}>{this.props.text}</button>
  }
}

export const PlusBtn = () => <Button text="+"/>

export class PlusButtonClass extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return <ButtonClass text='+'/>
  }
}

export const MinusBtn = () => <Button text="-"/>

export class MinusButtonClass extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return <ButtonClass text='-'/>
  }
}

export default {
  Button,
  ButtonClass
};