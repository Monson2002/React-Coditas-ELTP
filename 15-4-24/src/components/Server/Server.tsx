import styles from './Server.module.scss';
import { CommonInterface } from '../../App.types.tsx';
import Pill from '../Pill/Pill.tsx';
import Button from '../Button/Button.tsx';


const Server = (props: CommonInterface<string, boolean>) => {
  
  // const pillStyle = props.isActive ? styles.PillOn : styles.PillOff;
  const pillText = props.isActive ? "Online" : "Offline";
  const btnText = props.isActive ? "Stop" : "Start";
  
  return (
    <div className={styles.Server}>
      <h2 className={styles.Header}>{props.name}</h2>
      <div>
        <Pill name={pillText} isActive={props.isActive}/>
        <Button text={btnText}/>
      </div>
    </div>
  )
}

export default Server;