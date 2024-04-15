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

class FriendClass extends Component {
  render(): ReactNode {
    return (
      <div className={styles.friend}>
        This is Friend Class Component.
      </div>
    )
  }
}

export default {
  Friend,
  FriendClass
};