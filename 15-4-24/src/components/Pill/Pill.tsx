import { Component, ReactNode } from 'react';
import styles from './Pill.module.scss'

const Pill = (props: { name: string, isActive: boolean }) => {
  const pillStyle = props.isActive ? styles.PillOn : styles.PillOff;
  return (
    <div className={pillStyle}>
      {props.name}
    </div>
  )
}

class PillClass extends Component<{ name: string, isActive: boolean }, {}> {
  constructor(props: { name: string, isActive: boolean }) {
    super(props);
  }

  render(): ReactNode {
    const pillStyle = this.props.isActive ? styles.PillOn : styles.PillOff;
    return (
      <div className={pillStyle}>
        {this.props.name}
      </div>
    )
  }
}

export const PillOn = () => <Pill name='Online' isActive={true} />;
export const PillOff = () => <Pill name='Offline' isActive={false} />;

class PillOnClass extends Component<{},{}> {
  constructor(props: {}) {
    super(props)
  }
  render() {
    return (
      <Pill name='Online' isActive={true} />
    )
  }
}

class PillOffClass extends Component<{},{}> {
  constructor(props: {}) {
    super(props)
  }
  render() {
    return (
      <Pill name='Offline' isActive={false} />
    )
  }
}

export default {
  PillClass, 
  PillOnClass,
  PillOffClass,
  PillOn,
  PillOff
};