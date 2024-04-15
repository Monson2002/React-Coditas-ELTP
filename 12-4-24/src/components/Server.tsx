import { Component, ReactNode } from "react"
import styles from './Server.module.css';

const Server = (props: any) => {
  return (
    <>
      <div className={styles.server}>
        {props.name}
        {
          props.status === "On"
          ? <div className={styles.status}>Online</div>
          : <div className={styles.status}>Offline</div>
        }
        {
          props.status === "On" 
          ? <button className={styles.btn}>Stop Server</button>
          : <button className={styles.btn}>Start Server</button>
        }
      </div>
    </>
  )
}

class ServerClass extends Component<any> {
  constructor(params: any) {
    super(params);
  }
  render(): ReactNode {
    return (
      <>
        <div>
          {this.props.name} is {this.props.status} in class based Component.
        </div>
      </>
    )
  }
}

export default {
  Server,
  ServerClass
}