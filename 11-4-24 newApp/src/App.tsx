import styles from './App.module.css';
import { Component, ReactNode } from 'react';
import FriendMain from './components/Friend.jsx'

const {Friend, FriendClass} = FriendMain;

const App = () => {
  return (
    <>
      <div className={styles.friend}>
      This is App Component
      </div>
      <Friend/>
    </>
  )
}

class AppClass extends Component {
  render(): ReactNode {
    return (
      <>
        <div>
        This is App class Component
        </div>
        <FriendClass/>
      </>
    )
  }
}

export default {
  App,
  AppClass
};
