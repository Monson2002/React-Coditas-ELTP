import { Component, ReactNode } from 'react';
import styles from './Friend.module.css'

const Friend = (props: any) => {
  return (
    <>
      <div className={styles.friend}>
        {props.name1}
        {props.name2}
        {props.name3}
        {props.name4}
        {props.name5}
      </div>
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