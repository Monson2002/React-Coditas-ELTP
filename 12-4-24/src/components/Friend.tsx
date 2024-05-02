import { Component, ReactNode } from 'react';
import styles from './Friend.module.css'

const Friend = (props: any) => {
  return (
    <>
      <ul className={styles.friend}>
        {props.names.map((name: string) => {
          return <li>{name}</li>;
        })}
      </ul>
    </>
  )
}

class FriendClass extends Component<{names: string[]}, {}> {
  constructor(props: {names: string[]}) {
    super(props);
  }
  render(): ReactNode {
    return (
      <ul className={styles.friend}>
        {this.props.names.map((name: string, index: number) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    )
  }
}

export default {
  Friend,
  FriendClass
};