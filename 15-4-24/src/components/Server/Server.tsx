import styles from './Server.module.scss';
import { Component, ReactNode } from 'react';
import { CommonInterface } from '../../App.types.tsx';
import ButtonMain from '../Button/Button.tsx';
import PillMain from '../Pill/Pill.tsx';

const {Button, ButtonClass} = ButtonMain;
const {PillClass, PillOnClass, PillOffClass, PillOn, PillOff} = PillMain;

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

class ServerClass extends Component<{name: string, isActive: boolean},{}> {
  constructor(props: {name: string, isActive: boolean}) {
    super(props)
  }

  Pillstatus = this.props.isActive? <PillOnClass/> : <PillOffClass/>;
  btnText = this.props.isActive ? "Stop" : "Start";

  render(): ReactNode {
    return (
      <div className={styles.Server}>
        <h2 className={styles.Header}>{this.props.name}</h2>
        <div>
          {/* <Pill name={pillText} isActive={props.isActive}/> */}
          {this.Pillstatus}
          <ButtonClass text={this.btnText}/>
        </div>
      </div>
    )
  }
}

export default {
  Server,
  ServerClass
};