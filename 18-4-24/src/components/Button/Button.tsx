import styles from './Button.module.scss';

const Button = (props: {text: string}) => {
  return <button className={styles.Btn}>{props.text}</button>
}

export const PlusBtn = () => <Button text="+"/>

export const MinusBtn = () => <Button text="-"/>

export default Button;