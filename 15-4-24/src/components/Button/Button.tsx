import { ButtonInterface } from '../../App.types';
import styles from './Button.module.scss';

const Button = (props: ButtonInterface<string>) => {  
  return (
    <button className={styles.Btn}>
      {props.text}
    </button>
  )
}

export default Button;