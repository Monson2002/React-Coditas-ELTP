import styles from './App.module.css';
import { Component, ReactNode } from 'react';
import main from './components/Friend.jsx'

const {Friend} = main;

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
      </>
    )
  }
}

export default {
  App,
  AppClass
};
