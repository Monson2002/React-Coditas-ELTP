import { Component, ReactNode } from 'react';
import styles from './App.module.scss';
import ServerMain from './components/Server/Server.js';

const { Server, ServerClass } = ServerMain;

function App() {
  return (
    <>
      <div className={styles.App}>
        <Server name="EC2-M2" isActive={true} />
        <Server name="EC2-L4" isActive={false} />
        <Server name="EC2-C4" isActive={true} />
      </div>
    </>
  )
}

class AppClass extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode{
    return (
      <>
        <div className={styles.App}>
          <ServerClass name="EC2-M2" isActive={true} />
          <ServerClass name="EC2-L4" isActive={false} />
          <ServerClass name="EC2-C4" isActive={true} />
        </div>
      </>
    )
  }
}

export default {
  App,
  AppClass
}
