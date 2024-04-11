import { Component, ReactNode } from "react";
import styles from './Friend.module.css'

const Friend = () => {
  return (
    <>
      <div className={styles.friend}>
        This is Friend functional Component
      </div>
    </>
  )
}

class FriendClass extends Component {
  render(): ReactNode {
    return (
      <>
        This is Friend class Component
      </>
    )
  }
}

export default {
  Friend,
  FriendClass
};