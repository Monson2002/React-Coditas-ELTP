import styles from './Server.module.scss';
import { CommonInterface } from '../../App.types.tsx';
import Pill, { PillOff, PillOn } from '../Pill/Pill.tsx';
import Button from '../Button/Button.tsx';


const Server = (props: CommonInterface<string, boolean>) => {
  // const pillText = props.isActive ? "Online" : "Offline";
  const Pillstatus = props.isActive? <PillOn/> : <PillOff/>;
  const btnText = props.isActive ? "Stop" : "Start";
  
  return (
    <div className={styles.Server}>
      <h2 className={styles.Header}>{props.name}</h2>
      <div>
        {/* <Pill name={pillText} isActive={props.isActive}/> */}
        {Pillstatus}
        <Button text={btnText}/>
      </div>
    </div>
  )
}

export default Server;